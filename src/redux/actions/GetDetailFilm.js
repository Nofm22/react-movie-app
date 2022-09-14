import { dataApi } from "../../services/getData";
import {
    GET_CREDITS_MOVIES,
    GET_CREDITS_TV,
    GET_DETAIL_MOVIES,
    GET_DETAIL_TV,
    GET_SIMILAR_MOVIES,
    GET_SIMILAR_TV,
} from "../types/detailTypes";
import { SET_HIDE_LOADING, SET_LOADING } from "../types/types";

export const getMovie = (type, id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: SET_LOADING,
            });
            const detail = await dataApi.getDetail(type, id);
            const credits = await dataApi.getCredits(type, id);

            const similar = await dataApi.getSimilar(type, id);
            dispatch({
                type: GET_DETAIL_MOVIES,
                data: detail.data,
            });
            dispatch({
                type: GET_SIMILAR_MOVIES,
                data: similar.data.results,
            });
            dispatch({
                type: GET_CREDITS_MOVIES,
                data: credits.data.cast,
            });

            dispatch({ type: SET_HIDE_LOADING });
        } catch (e) {
            console.log(e);
        }
    };
};

export const getTV = (type, id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type:SET_LOADING,
            })
            const detail = await dataApi.getDetail(type, id);
            const credits = await dataApi.getCredits(type, id);
            const similar = await dataApi.getSimilar(type, id);
            dispatch({
                type: GET_DETAIL_TV,
                data: detail.data,
            });
            dispatch({
                type: GET_CREDITS_TV,
                data: credits.data.cast,
            });
            dispatch({
                type: GET_SIMILAR_TV,
                data: similar.data.results,
            });
            dispatch({
                type:SET_HIDE_LOADING,
            })
        } catch (e) {
            console.log(e);
        }
    };
};
