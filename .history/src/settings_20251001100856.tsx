import {
    PanelSection,
    PanelSectionRow,
    SliderField,
    showModal,
    ButtonItem,
    ToggleField
} from "@decky/ui";
import { useEffect } from "react";
import { FaEdit } from "react-icons/fa";

import { Position, ViewMode } from "./util";
import { useGlobalState } from "./globalState";
import { UrlModalWithState } from "./urlModal";

export const Settings = () => {
    const [{ viewMode, position, margin, url, size }, setGlobalState, stateContext] = useGlobalState();

    useEffect(() => {
        setGlobalState(state => ({
            ...state,
            visible: true,
            viewMode: state.viewMode == ViewMode.Closed
                ? ViewMode.Picture
                : state.viewMode
        }));
    }, []);

    // スライダー左端 -> 右端 で時計回りに移動
    const clockwisePositions: Position[] = [
        Position.TopLeft,
        Position.Top,
        Position.TopRight,
        Position.Right,
        Position.BottomRight,
        Position.Bottom,
        Position.BottomLeft,
        Position.Left,
    ];
    const positionIndex = clockwisePositions.indexOf(position);

    return <>
        <PanelSection>
            {viewMode == ViewMode.Closed && <>
                <PanelSectionRow>
                    <ButtonItem
                        bottomSeparator="none"
                        layout="below"
                        onClick={() => setGlobalState(state => ({
                            ...state,
                            viewMode: ViewMode.Picture
                        }))}>
                        Open
                    </ButtonItem>
                </PanelSectionRow>
            </>}
            {viewMode != ViewMode.Closed && <>
                <PanelSectionRow>
                    <ButtonItem
                        label='Address'
                        layout="below"
                        onClick={() => showModal(<UrlModalWithState value={stateContext} />)}>
                        <div style={{ display: 'flex' }}>
                            <FaEdit />
                            &nbsp;&nbsp;
                            <div style={{ maxWidth: 180, textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                {url}
                            </div>
                        </div>
                    </ButtonItem>
                </PanelSectionRow>
                <PanelSectionRow>
                    <ToggleField
                        label='Expand'
                        checked={viewMode == ViewMode.Expand}
                        onChange={checked => {
                            setGlobalState(state => ({
                                ...state,
                                viewMode: checked
                                    ? ViewMode.Expand
                                    : ViewMode.Picture
                            }))
                        }} />
                </PanelSectionRow>
            </>}
            {viewMode == ViewMode.Picture && <>
                <PanelSectionRow>
                    <SliderField
                        label='View Position'
                        value={positionIndex < 0 ? 0 : positionIndex}
                        onChange={i =>
                            setGlobalState(state => ({
                                ...state,
                                position: clockwisePositions[i as number] ?? Position.TopLeft,
                                visible: true,
                                viewMode: ViewMode.Picture
                            }))}
                        min={0}
                        max={clockwisePositions.length - 1}
                        step={1}
                        notchCount={clockwisePositions.length}
                        notchTicksVisible={true}
                        notchLabels={[
                            { label: 'TL', notchIndex: 0, value: 0 },
                            { label: 'T', notchIndex: 1, value: 1 },
                            { label: 'TR', notchIndex: 2, value: 2 },
                            { label: 'R', notchIndex: 3, value: 3 },
                            { label: 'BR', notchIndex: 4, value: 4 },
                            { label: 'B', notchIndex: 5, value: 5 },
                            { label: 'BL', notchIndex: 6, value: 6 },
                            { label: 'L', notchIndex: 7, value: 7 },
                        ]}
                    />
                </PanelSectionRow>
                <PanelSectionRow>
                    <SliderField
                        label='Size'
                        value={size}
                        onChange={size =>
                            setGlobalState(state => ({
                                ...state,
                                size,
                                visible: true,
                                viewMode: ViewMode.Picture
                            }))}
                        min={0.70}
                        max={1.30}
                        step={0.15}
                        notchCount={3}
                        notchTicksVisible={true}
                        notchLabels={[
                            { label: "S", notchIndex: 0, value: 0.70 },
                            { label: "M", notchIndex: 1, value: 1 },
                            { label: "L", notchIndex: 2, value: 1.30 }
                        ]} />
                </PanelSectionRow>
                <PanelSectionRow>
                    <SliderField
                        label='Margin'
                        value={margin}
                        onChange={margin =>
                            setGlobalState(state => ({
                                ...state,
                                margin,
                                visible: true,
                                viewMode: ViewMode.Picture
                            }))}
                        min={0}
                        max={60}
                        step={15}
                        notchCount={3}
                        notchTicksVisible={true}
                        notchLabels={[
                            { label: "S", notchIndex: 0, value: 0 },
                            { label: "M", notchIndex: 1, value: 30 },
                            { label: "L", notchIndex: 2, value: 60 },
                        ]} />
                </PanelSectionRow>
            </>}
            {viewMode != ViewMode.Closed && <>
                <PanelSectionRow>
                    <ButtonItem
                        bottomSeparator="none"
                        layout="below"
                        onClick={() => setGlobalState(state => ({
                            ...state,
                            viewMode: ViewMode.Closed
                        }))}>
                        Close
                    </ButtonItem>
                </PanelSectionRow>
            </>}
        </PanelSection>
    </>;
};