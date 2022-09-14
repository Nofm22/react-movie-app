import { HIDE_OVERLAY, SHOW_OVERLAY } from "../types/types";

const stateDefault = {
    show:true,
}


export const OverlayReducers = (state = stateDefault,action) => {
    switch(action.type) {

        case HIDE_OVERLAY: {
            return {...state,visible:false};
        }
        case SHOW_OVERLAY: {
            return {...state,visible:true};
        }


        default: return {...state};
    }
}