import {
    PanelSection,
    PanelSectionRow,
    DropdownItem,
    SliderField,
    showModal,
    ButtonItem
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

    const positionOptions = [
        { label: 'Top', data: Position.Top },
        { label: 'Top Right', data: Position.TopRight },
        { label: 'Right', data: Position.Right },
        { label: 'Bottom Right', data: Position.BottomRight },
        { label: 'Bottom', data: Position.Bottom },
        { label: 'Bottom Left', data: Position.BottomLeft },
        { label: 'Left', data: Position.Left },
        { label: 'Top Left', data: Position.TopLeft },
    ];

    const viewModeOptions = [
        { label: 'Picture', data: ViewMode.Picture },
        { label: 'Expand', data: ViewMode.Expand },
        { label: 'Closed', data: ViewMode.Closed },
    ];

    return <>
        <PanelSection>
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
                <DropdownItem
                    label='Position'
                    selectedOption={position}
                    rgOptions={positionOptions}
                    onMenuOpened={() =>
                        setGlobalState(state => ({
                            ...state,
                            visible: false
                        }))}
                    onChange={option =>
                        setGlobalState(state => ({
                            ...state,
                            visible: true,
                            position: option.data,
                            viewMode: ViewMode.Picture
                        }))} />
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
            <PanelSectionRow>
                <DropdownItem
                    label='Mode'
                    selectedOption={viewMode}
                    rgOptions={viewModeOptions}
                    onMenuOpened={() =>
                        setGlobalState(state => ({
                            ...state,
                            visible: false
                        }))}
                    onChange={option =>
                        setGlobalState(state => ({
                            ...state,
                            visible: true,
                            viewMode: option.data,
                        }))} />
            </PanelSectionRow>
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
        </PanelSection>
    </>;
};