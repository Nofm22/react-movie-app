import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { apiConfig } from "../services/apiConfig";
// import required modules
import { Parallax, Autoplay, Pagination, Navigation } from "swiper";
import { GET_FILM_HOME } from "../redux/actions/GetFilm";
import { SET_INVISIBLE, SET_VISIBLE } from "../redux/types/types";
import { GET_MODAL_CONTENT } from "../redux/actions/GetModalContent";
import { EffectFade } from "swiper";
import { EffectCreative } from "swiper";
import {useNavigate} from 'react-router-dom'
export const CarouselTemplate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(GET_FILM_HOME(1));
    }, []);
    const { topPopularFilm } = useSelector((state) => state.FilmHome);
    return (
        <>
            <Swiper
                // style={{
                //     "--swiper-navigation-color": "#fff",
                //     "--swiper-pagination-color": "#fff",
                // }}
                speed={600}
                //parallax={true}
                spaceBetween={-1}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                // effect={"creative"}
                // creativeEffect={{
                //     prev: {
                //         shadow: true,
                //         translate: [0, 0, -400],
                //     },
                //     next: {
                //         translate: ["100%", 0, 0],
                //     },
                // }}
                modules={[ Autoplay,Pagination, Navigation, EffectCreative]}
                className="mySwiper"
            >
                {topPopularFilm?.map((film, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div
                                className="pt-[8rem] mobile:min-h-[1280px] cursor-pointer"
                                id="image"
                                style={{
                                    backgroundImage: `linear-gradient(205deg, rgba(0, 0, 0, 0.85) 42%, rgba(19, 26, 140, 0.6) 100%),url(${apiConfig.originalImage(
                                        film.backdrop_path
                                    )})`,
                                }}
                            >
                                <div className="px-8 grid grid-cols-12 m-auto mt-8 mobile:flex mobile:flex-col">
                                    <div className="cursor-pointer p-16 col-start-2 col-span-4 flex justify-center items-center laptop:p-1 tablet:p-2 tablet:col-start-1 tablet:col-span-5">
                                        <img
                                            style={{
                                                boxShadow:
                                                    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                            }}
                                            className="h-[590px] rounded-[20px] tablet:h-[590px] mobile:h-[400px]"
                                            src={`${apiConfig.w500Image(
                                                film.poster_path
                                            )}`}
                                        />
                                    </div>
                                    <div className="flex flex-col col-end-13 col-start-6 mobile:mt-[20px]">
                                        <div className="tablet:text-[2rem] text-6xl font-black text-ellipsis p-16 text-left  mobile:p-0 mobile:leading-[1.4] tablet:p-8 mobile:text-[2rem] mobile:text-center">
                                            <p>{film.title}</p>
                                        </div>
                                        <div className=" text-ellipsis">
                                            <p className="text-lg font-bold tablet:text-[1rem] text-left px-16 tablet:px-8 mobile:text-[1rem] mobile:p-0 mobile:mt-[20px] mobile:text-center">
                                                {film.overview}
                                            </p>
                                        </div>
                                        <div className="px-16 flex justify-start h-[60px] mt-16 tablet:p-0 table:justify-around mobile:justify-center">
                                            <span className="h-full tablet:mr-0 mr-8 hover:drop-shadow-xl leading-[60px] transition-all hover:scale-105" onClick={() => {
                                                navigate(`/movies/${film.id}`);
                                            }}>
                                                <a className="block mobile:px-[5px] leading-[60px] px-[30px] tablet:p-0 tablet:ml-4 tablet:rounded-[1rem] rounded-[2rem] font-bold bg-main-color transition-all cursor-pointer ">
                                                    Watch now
                                                </a>
                                            </span>
                                            <span className="ml-8 hover:scale-105">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();

                                                        dispatch({
                                                            type: SET_VISIBLE,
                                                        });

                                                        dispatch(
                                                            GET_MODAL_CONTENT(
                                                                film.id
                                                            )
                                                        );
                                                    }}
                                                    className="block mobile:px-[5px] leading-[60px] px-[30px] tablet:p-0 tablet:rounded-[1rem] font-bold rounded-[2rem] border-2 cursor-pointer"
                                                >
                                                    Watch trailer
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};
