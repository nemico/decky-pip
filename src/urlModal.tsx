import {
    TextField,
    ConfirmModal,
    ModalRootProps
} from "@decky/ui";
import { useEffect, useState } from "react";

import { modalWithState } from "./modal";
import { useGlobalState } from "./globalState";

export const UrlModal = (props: ModalRootProps) => {
    const [{ url }, setGlobalState] = useGlobalState();
    const [field, setField] = useState(url);

    useEffect(() => {
        setGlobalState(state => ({
            ...state,
            visible: false
        }));

        return () => setGlobalState(state => ({
            ...state,
            visible: true
        }));
    }, [])

    return <ConfirmModal
        {...props}
        strTitle='URL'
        onOK={() => {
            setGlobalState(state => ({
                ...state,
                visible: true,
                url: field
            }));
        }}
        onCancel={() => {
            setGlobalState(state => ({
                ...state,
                visible: true
            }))
        }}>
        <TextField
            value={field}
            onChange={e => setField(e.target.value)} />
    </ConfirmModal>;
}

export const UrlModalWithState = modalWithState(UrlModal);