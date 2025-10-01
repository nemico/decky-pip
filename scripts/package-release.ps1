param(
  [string]$Version = ""
)

$ErrorActionPreference = 'Stop'

function Write-Info($m){ Write-Host "[INFO] $m" -ForegroundColor Cyan }

if(-not (Test-Path package.json)){ Write-Error "Run inside repo root" }

# Read version from package.json if not provided
if(-not $Version -or $Version -eq ""){
  $json = Get-Content package.json -Raw | ConvertFrom-Json
  $Version = $json.version
}

Write-Info "Building dist (version $Version)"
npm run build | Out-Null

if(Test-Path release-temp){ Remove-Item release-temp -Recurse -Force }
New-Item -ItemType Directory -Path release-temp | Out-Null

Copy-Item plugin.json release-temp/
if(Test-Path picture.jpg){ Copy-Item picture.jpg release-temp/ }
if(Test-Path expand.jpg){ Copy-Item expand.jpg release-temp/ }
Copy-Item dist release-temp/dist -Recurse

$zipName = "decky-pip-$Version.zip"
if(Test-Path $zipName){ Remove-Item $zipName -Force }
Compress-Archive -Path release-temp/* -DestinationPath $zipName
Remove-Item release-temp -Recurse -Force

Write-Info "Created $zipName"
Write-Host "Upload this file as a Release asset then use its URL in Decky Loader's Install from URL." -ForegroundColor Green
