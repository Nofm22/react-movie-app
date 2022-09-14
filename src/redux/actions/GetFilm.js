
import { dataApi } from "../../services/getData"
import { GET_FILM_HOME_POPULAR, GET_POPULAR_TV, GET_SEARCH_FILM, GET_TOP_RATED_MOVIES, GET_TOP_RATED_TV, GET_UPCOMING_FILM_HOME } from "../types/FilmHome/types";
import { SET_HIDE_LOADING, SET_LOADING } from "../types/types";

export const GET_FILM_HOME = (pageNumber) => {
    return async dispatch => {
        try {
            dispatch({
                type:SET_LOADING,
            })
            const req = await dataApi.getListMovies({params:{page:pageNumber}},'popular');
            
            dispatch({
                type:GET_FILM_HOME_POPULAR,
                data:req.data,
            })
            dispatch({
                type:SET_HIDE_LOADING,
            })
        } catch(e) {
            console.log(e)
        }


    }
}

export const getUpcomingfilm = (pageNumber) => {
    return async dispatch => {
        try {
            const req = await dataApi.getListMovies({params:{page:pageNumber}},'upcoming');

            dispatch({
                type:GET_UPCOMING_FILM_HOME,
                data:req.data,
            })
        } catch(e) {
            
            console.log(e)
        }
    }
}

export const getTopRatedFilm = (pageNumber) => {
    return async dispatch => {
        try {
            const req = await dataApi.getListMovies({params: {page:pageNumber}},'top_rated');

            dispatch({
                type:GET_TOP_RATED_MOVIES,
                data:req.data,
            })
        } catch(e) {
            
            console.log(e)
        }
    }
}
export const getPopularTV = (pageNumber) => {
    return async dispatch => {
        try {
            const req = await dataApi.getTvList({params: {page:pageNumber}},'popular');

            dispatch({
                type:GET_POPULAR_TV,
                data:req.data,
            })
        } catch(e) {
            
            console.log(e)
        }
    }
}
export const getTopRatedTV = (pageNumber) => {
    return async dispatch => {
        try {
            const req = await dataApi.getTvList({params: {page:pageNumber}},'top_rated');

            dispatch({
                type:GET_TOP_RATED_TV,
                data:req.data,
            })
        } catch(e) {
            
            console.log(e)
        }
    }
}
export const SearchFilm = (value,page) => {
    return async dispatch => {
        try {
           // console.log(value);
            const req = await dataApi.search(value,page);
            dispatch({
                type:GET_SEARCH_FILM,
                data:req.data,
            })
        } catch(e) {
            console.log(e)
        }
    }
}