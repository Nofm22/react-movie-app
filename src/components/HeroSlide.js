import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Parallax, Autoplay, Pagination, Navigation } from "swiper";
import {
    getPopularTV,
    getTopRatedFilm,
    getTopRatedTV,
    getUpcomingfilm,
} from "../redux/actions/GetFilm";
import { apiConfig } from "../services/apiConfig";
import { useNavigate } from "react-router-dom";
import { SET_LOADING } from "../redux/types/types";

function HeroSlide() {
    const dispatch = useDispatch();
    const width = window.innerWidth;
    const [slidePerView, setSlidePerView] = useState(6);
    const navigate = useNavigate();
    const { upComingFilm, topRatedFilm, popularTV, topRatedTV } = useSelector(
        (state) => state.FilmHome
    );
    const handleResize = () => {
        if (width > 1200) {
            setSlidePerView(5);
        } else if (width > 1024) {
            setSlidePerView(4);
        } else if (width > 720) {
            setSlidePerView(3);
        } else if (width > 540) {
            setSlidePerView(2);
        } else if (width <= 540) {
            setSlidePerView(1);
        }
    };
    useEffect(() => {
        dispatch(getUpcomingfilm(1));
        dispatch(getTopRatedFilm(1));
        dispatch(getPopularTV(1));
        dispatch(getTopRatedTV(1));
    }, []);
    useEffect(() => {
        window.addEventListener("resize", handleResize);
    }, [slidePerView]);
    return (
        <section className="w-full h-auto bg-body-bg text-text-color pt-16 pb-16">
            <main className="mx-32 mobile:mx-4 tablet:mx-8">
                <div className="mt-8">
                    <div className="grid grid-cols-12 font-bold text-xl mx-2">
                        <h3 className="col-span-6 mobile:text-[15px]">
                            Up comming movies
                        </h3>
                        <div
                            className="col-span-6 text-right mobile:text-[15px] cursor-pointer"
                            onClick={() => {
                                dispatch({
                                    type: SET_LOADING,
                                });
                                window.scrollTo(0, 0);
                                navigate("/movies/search/upcoming");
                            }}
                        >
                            <a className="inline-block p-2 border-2 rounded-[20px] text-medium">
                                View more
                            </a>
                        </div>
                    </div>
                    <div className="w-full h-[400px] mt-8">
                        <Swiper
                            slidesPerView={`${slidePerView}`}
                            spaceBetween={10}
                            freeMode={true}
                            modules={[FreeMode]}
                            className="mySwiper"
                        >
                            {upComingFilm?.map((film, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div
                                            className="cursor-pointer mobile:w-[70%] flex flex-col w-full h-[100%] bg-body-bg transition-all"
                                            onClick={() => {
                                                dispatch({
                                                    type: SET_LOADING,
                                                });
                                                navigate(`/movies/${film.id}`);
                                            }}
                                        >
                                            <div
                                                className="h-[100%] w-full bg-cover bg-center rounded-[20px] bg-no-repeat min-h-[353px] hover:scale-105"
                                                style={{
                                                    backgroundImage: `url(${apiConfig.originalImage(
                                                        film.backdrop_path
                                                    )})`,
                                                }}
                                            ></div>
                                            <div className="mobile:text-center font-bold text-[15px] text-left mt-6 truncate break-all">
                                                {film.title}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
                <div className="mt-16">
                    <div className="grid grid-cols-12 font-bold text-xl mx-2">
                        <h3 className="col-span-6 mobile:text-[15px]">
                            Top rated movies
                        </h3>
                        <div
                            className="col-span-6 text-right mobile:text-[15px]"
                            onClick={() => {
                                dispatch({
                                    type: SET_LOADING,
                                });
                                window.scrollTo(0, 0);
                                navigate("/movies/search/toprated");
                            }}
                        >
                            <a className="inline-block p-2 border-2 rounded-[20px] text-medium cursor-pointer">
                                View more
                            </a>
                        </div>
                    </div>
                    <div className="w-full h-[400px] mt-8">
                        <Swiper
                            slidesPerView={`${slidePerView}`}
                            spaceBetween={10}
                            freeMode={true}
                            modules={[FreeMode]}
                            className="mySwiper"
                        >
                            {topRatedFilm?.map((film, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div
                                            className="cursor-pointer mobile:w-[70%] flex flex-col w-full h-[100%] bg-body-bg transition-all"
                                            onClick={() => {
                                                dispatch({
                                                    type: SET_LOADING,
                                                });
                                                navigate(`/movies/${film.id}`);
                                            }}
                                        >
                                            <div
                                                className="h-[100%] w-full bg-cover bg-center rounded-[20px] bg-no-repeat min-h-[353px] hover:scale-105"
                                                style={{
                                                    backgroundImage: `url(${apiConfig.originalImage(
                                                        film.backdrop_path
                                                    )})`,
                                                }}
                                            ></div>
                                            <div className="mobile:text-center font-bold text-[15px] text-left mt-6 truncate break-all">
                                                {film.title}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
                <div className="mt-16">
                    <div className="grid grid-cols-12 font-bold text-xl mx-2">
                        <h3 className="col-span-6 mobile:text-[15px]">
                            Popular TV
                        </h3>
                        <div
                            className="col-span-6 text-right mobile:text-[15px] cursor-pointer"
                            onClick={() => {
                                dispatch({
                                    type: SET_LOADING,
                                });
                                window.scrollTo(0, 0);
                                navigate("/tv/search/popular");
                            }}
                        >
                            <a className="inline-block p-2 border-2 rounded-[20px] text-medium">
                                View more
                            </a>
                        </div>
                    </div>
                    <div className="w-full h-[400px] mt-8">
                        <Swiper
                            slidesPerView={`${slidePerView}`}
                            spaceBetween={10}
                            freeMode={true}
                            modules={[FreeMode]}
                            className="mySwiper"
                        >
                            {popularTV?.map((film, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div
                                            className="cursor-pointer mobile:w-[70%] flex flex-col w-full h-[100%] bg-body-bg transition-all"
                                            onClick={() => {
                                                dispatch({
                                                    type: SET_LOADING,
                                                });
                                                navigate(`/tv/${film.id}`);
                                            }}
                                        >
                                            <div
                                                className="h-[100%] w-full bg-cover bg-center rounded-[20px] bg-no-repeat min-h-[353px] hover:scale-105"
                                                style={{
                                                    backgroundImage: `url(${apiConfig.originalImage(
                                                        film.backdrop_path
                                                    )})`,
                                                }}
                                            ></div>
                                            <div className="mobile:text-center font-bold text-[15px] text-left mt-6 truncate break-all">
                                                {film.original_name}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
                <div className="mt-16">
                    <div className="grid grid-cols-12 font-bold text-xl mx-2">
                        <h3 className="col-span-6 mobile:text-[15px]">
                            Top rated TV
                        </h3>
                        <div
                            className="col-span-6 text-right mobile:text-[15px] cursor-pointer"
                            onClick={() => {
                                dispatch({
                                    type: SET_LOADING,
                                });
                                window.scrollTo(0, 0);
                                navigate("/tv/search/toprated");
                            }}
                        >
                            <a className="inline-block p-2 border-2 rounded-[20px] text-medium">
                                View more
                            </a>
                        </div>
                    </div>
                    <div className="w-full h-[400px] mt-8">
                        <Swiper
                            slidesPerView={`${slidePerView}`}
                            spaceBetween={10}
                            freeMode={true}
                            modules={[FreeMode]}
                            className="mySwiper"
                        >
                            {topRatedTV?.map((film, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div
                                            className="cursor-pointer mobile:w-[70%] flex flex-col w-full h-[100%] bg-body-bg transition-all"
                                            onClick={() => {
                                                dispatch({
                                                    type: SET_LOADING,
                                                });
                                                navigate(`/tv/${film.id}`);
                                            }}
                                        >
                                            <div
                                                className="h-[100%] w-full bg-cover bg-center rounded-[20px] bg-no-repeat min-h-[353px] hover:scale-105"
                                                style={{
                                                    backgroundImage: `url(${apiConfig.originalImage(
                                                        film.backdrop_path
                                                    )})`,
                                                }}
                                            ></div>
                                            <div className="mobile:text-center font-bold text-[15px] text-left mt-6 truncate break-all">
                                                {film.original_name}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default HeroSlide;
