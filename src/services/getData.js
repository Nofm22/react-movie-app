
import { axiosRequest } from "./axiosRequest";
export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}



export const dataApi = {
    // Movies
    // Home page
    getListMovies:(params,type) => {
        let url = '/movie/' + movieType[type];
        return axiosRequest.get(url,params); 
    },
    getTvList:(params,type) => {
        let url = '/tv/' + tvType[type];
        return axiosRequest.get(url,params);
    },
    getVideos: (id,type) => {
        const url = category[type] + '/' + id + '/videos';
        return axiosRequest.get(url,{params: {}});
    },
    getDetail: (type,id) => {
        const url = category[type] + '/' + id;
        return axiosRequest.get(url,{params:{language:'en-US'}});
    },
    getSimilar: (type,id) => {
        const url = category[type] + '/' + id + '/similar';
        return axiosRequest.get(url,{params:{page:1}});
    },
    getCredits: (type,id) => {
        const url = category[type] + '/' + id + '/credits';
        return axiosRequest.get(url,{params:{}});
    },
    search:(value,page) => {
        const url = 'search/movie';
        return axiosRequest.get(url,{params:{
            query:value,
            page,
        }})
    }
    
}