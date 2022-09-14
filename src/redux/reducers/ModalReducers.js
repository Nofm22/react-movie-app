import React from "react";
import {
    GET_COMPONENT_CONTENT,
    SET_INVISIBLE,
    SET_VISIBLE,
} from "../types/types";

const stateDefault = {
    visible: false,
    ComponentContent: <></>,
};

export const ModalReducers = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_INVISIBLE: {
            return { ...state, visible: false };
        }
        case SET_VISIBLE: {
            state.visible = true;
            console.log(state.visible);
            return { ...state };
        }
        case GET_COMPONENT_CONTENT: {
            console.log('action key',action.key);
            return {
                ...state,
                ComponentContent: (
                    <iframe
                        allowfullscreen
                        loading="lazy"
                        src={`https://www.youtube.com/embed/${action.key}`}
                        width="100%"
                        height="100%"
                    ></iframe>
                ),
            };
        }
        default:
            return { ...state };
    }
};
