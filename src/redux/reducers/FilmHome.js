import { GET_FILM_HOME_POPULAR, GET_POPULAR_TV, GET_SEARCH_FILM, GET_TOP_RATED_MOVIES, GET_TOP_RATED_TV, GET_UPCOMING_FILM_HOME, HIDE_SEARCH_FILM } from "../types/FilmHome/types";


const stateDefualt = {
    topPopularFilm:[],
    upComingFilm:[],
    topRatedFilm:[],
    popularTV:[],
    topRatedTV:[],
    movie:[],
    movieUpComing:[],
    totalPage:0,
    searchFilm:[],
    pageSearch:0,
}


export const FilmHome = (state = stateDefualt,action) => {
    switch(action.type) {
        case GET_FILM_HOME_POPULAR: {
            
            return {...state,topPopularFilm:action.data.results.slice(0,10),movie:action.data.results,totalPage:action.data.total_pages > 20 ? 20 : action.data.total_pages};
        }

        case GET_UPCOMING_FILM_HOME: {
            return {...state,upComingFilm:action.data.results,movie:action.data.results,totalPage:action.data.total_pages > 20 ? 20 : action.data.total_pages};
        }

        case GET_TOP_RATED_MOVIES: {
            return {...state,topRatedFilm:action.data.results,movie:action.data.results,totalPage:action.data.total_pages > 20 ? 20 : action.data.total_pages};
        }
        case GET_POPULAR_TV: {
            return {...state,popularTV:action.data.results,movie:action.data.results,totalPage:action.data.total_pages > 20 ? 20 : action.data.total_pages};
        }
        case GET_TOP_RATED_TV: {
            return {...state,topRatedTV:action.data.results,movie:action.data.results,totalPage:action.data.total_pages > 20 ? 20 : action.data.total_pages};
        }
        case GET_SEARCH_FILM: {
            return {...state,searchFilm:action.data.results,pageSearch:action.data.results.total_pages};
        }
        case HIDE_SEARCH_FILM: {
            return {...state,searchFilm:[]};
        }
        default: return {...state};
    }
}