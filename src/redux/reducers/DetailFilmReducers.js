import { GET_CREDITS_MOVIES, GET_CREDITS_TV, GET_DETAIL_MOVIES, GET_DETAIL_TV, GET_SIMILAR_MOVIES, GET_SIMILAR_TV } from "../types/detailTypes";



const stateDefault = {
    movieDetail:[],
    movieSimilar:[],
    movieCredit:[],
    tvDetail:[],
    tvSimilar:[],
    tvCredit:[],
    genres:[],
    tvSeason:[],
}


export const DetailFilmReducers = (state = stateDefault,action) => {

    switch(action.type) {

        case GET_DETAIL_MOVIES: {
            return {...state,movieDetail:action.data,genres:action.data.genres};
        }
        case GET_CREDITS_MOVIES: {
            state.movieCredit = action.data.slice(0,10);
            return {...state};
        }
        case GET_SIMILAR_MOVIES: {
            state.movieSimilar = action.data;
            return {...state};
        }
        case GET_DETAIL_TV: {
            return {...state,tvDetail:action.data,genres:action.data.genres,tvSeason:action.data.seasons}
        }
        case GET_CREDITS_TV: {
            return {...state,tvCredit:action.data.slice(0,10)}
        }
        case GET_SIMILAR_TV: {
            return {...state,tvSimilar:action.data};
        }
        default : {
            return {...state};
        }
    }
}