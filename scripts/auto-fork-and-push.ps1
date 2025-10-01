<#!
.SYNOPSIS
  Upstream リポ (オリジナル) から自分の GitHub アカウントへフォークし、現在の作業ツリーを push し、deck.json の Raw URL を表示します。

.DESCRIPTION
  - 既存 clone が upstream(作者) のものでも、origin を安全に切替
  - GitHub CLI (gh) が必要
  - dist ビルドオプション
  - package-lock.json の除去/ignore オプション
  - 既存変更があれば自動コミット (メッセージ: chore: auto commit before fork push)

.PARAMETER Upstream
  フォーク元 (owner/repo)
.PARAMETER Branch
  Push 対象ブランチ
.PARAMETER BuildDist
  dist フォルダをビルドし追加
.PARAMETER IgnorePackageLock
  package-lock.json を .gitignore に追記し削除
.PARAMETER Force
  途中での確認をスキップ

.EXAMPLE
  pwsh -File .\scripts\auto-fork-and-push.ps1 -Upstream rossimo/decky-pip -BuildDist -IgnorePackageLock

.NOTES
  Windows PowerShell でも動作を想定。
#>
param(
  [string]$Upstream = "rossimo/decky-pip",
  [string]$Branch = "main",
  [switch]$BuildDist,
  [switch]$IgnorePackageLock,
  [switch]$Force
)

function Write-Info($m){ Write-Host "[INFO] $m" -ForegroundColor Cyan }
function Write-Warn($m){ Write-Host "[WARN] $m" -ForegroundColor Yellow }
function Write-Err($m){ Write-Host "[ERROR] $m" -ForegroundColor Red }

# 1. 前提コマンド確認
foreach($c in @('git','gh')){ if(-not (Get-Command $c -ErrorAction SilentlyContinue)){ Write-Err "$c が見つかりません"; exit 1 } }

# 2. gh auth 確認
Write-Info "GitHub 認証状態確認..."
$authOk = $true
try { gh auth status 1>$null 2>$null } catch { $authOk = $false }
if(-not $authOk){
  if(-not $Force){ Write-Warn "gh auth login を実行します (ブラウザ認証が開きます)" }
  gh auth login
  if($LASTEXITCODE -ne 0){ Write-Err "gh auth login 失敗"; exit 1 }
}

# 3. 既存 remotes
$remotes = git remote
$upstreamSet = $false
if($remotes -contains 'origin'){
  $originUrl = git remote get-url origin
  if($originUrl -match [Regex]::Escape($Upstream)){
    Write-Info "origin は upstream を指しているので upstream へリネーム";
    git remote rename origin upstream
    $upstreamSet = $true
  }
}

if(-not $upstreamSet){
  if($remotes -notcontains 'upstream'){
    # 推定で Upstream がまだ追加されていない場合
    git remote add upstream https://github.com/$Upstream.git 2>$null
  }
}

# 4. フォークが存在しなければ作成
Write-Info "フォークの存在チェック";
$login = gh api user --jq '.login'
$forkUrl = "https://github.com/$login/" + ($Upstream.Split('/')[1]) + '.git'
$needCreate = $true
try {
  gh repo view $login/($Upstream.Split('/')[1]) 1>$null 2>$null; $needCreate = $false
} catch { $needCreate = $true }

if($needCreate){
  Write-Info "フォーク作成: $Upstream -> $login";
  gh repo fork $Upstream --remote --clone=false --default-branch-only | Out-Null
} else {
  Write-Info "既にフォーク存在: $forkUrl"
}

# 5. origin を自分フォークへ
if($remotes -contains 'origin'){
  $currentOrigin = git remote get-url origin
  if($currentOrigin -ne $forkUrl){
    Write-Info "origin を $forkUrl に設定";
    git remote set-url origin $forkUrl
  }
} else {
  git remote add origin $forkUrl
}

# 6. オプション: package-lock ignore
if($IgnorePackageLock){
  if(Test-Path package-lock.json){
    Write-Info "package-lock.json 削除";
    git rm --cached package-lock.json 2>$null | Out-Null
    Remove-Item package-lock.json -Force
  }
  if(Test-Path .gitignore){
    $contains = Select-String -Path .gitignore -Pattern 'package-lock.json' -Quiet
    if(-not $contains){ Add-Content .gitignore "`npackage-lock.json"; git add .gitignore }
  } else {
    "package-lock.json" | Out-File .gitignore -Encoding UTF8; git add .gitignore
  }
}

# 7. オプション: dist ビルド
if($BuildDist){
  if(Test-Path package.json){
    Write-Info "dist ビルド";
    npm run build
    if($LASTEXITCODE -ne 0){ Write-Err "ビルド失敗"; exit 1 }
    if(Test-Path dist){ git add dist }
  } else { Write-Warn "package.json がないためビルドスキップ" }
}

# 8. 変更があればコミット
$changes = git status --porcelain
if($changes){
  Write-Info "未コミット変更をコミット";
  git add src 2>$null | Out-Null
  git commit -m "chore: auto commit before fork push" | Out-Null
} else { Write-Info "コミットすべき変更なし" }

# 9. Push
Write-Info "origin($forkUrl) へ push";
 git push origin $Branch
 if($LASTEXITCODE -ne 0){ Write-Err "push 失敗"; exit 1 }

# 10. Raw URL 表示
$raw = "https://raw.githubusercontent.com/$login/" + ($Upstream.Split('/')[1]) + "/$Branch/deck.json"
Write-Host "`nRaw deck.json URL:" -ForegroundColor Green
Write-Host $raw -ForegroundColor Green
Write-Host "\nDecky Loader > Settings > Store > Custom Repos へ上記 URL を追加してください" -ForegroundColor Cyan
