import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiConfig } from "../../services/apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import {
    getMovie,
} from "../../redux/actions/GetDetailFilm";
import { useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
function Movie() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0,0);
    },[location])
    console.log(location);
    const navigate = useNavigate();
    const { id } = useParams();
    const { movieDetail, genres, movieCredit, movieSimilar } = useSelector(
        (state) => state.DetailFilmReducers
    );
    const dispatch = useDispatch();
    const [slidePerView, setSlidePerView] = useState(6);
    const handleResize = () => {
        console.log(window.innerWidth);
        const width = window.innerWidth;
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
        dispatch(getMovie("movie", id));
        console.log("detail")
    },[id]);
    useEffect(() => {
        window.addEventListener("resize", handleResize);

    }, [slidePerView]);
    return (
        <section className="w-full h-auto">
            <div
                className="pt-[8rem] mobile:min-h-[1280px] text-text-color"
                id="image"
                style={{
                    backgroundImage: `linear-gradient(205deg, rgba(0, 0, 0, 0.85) 42%, rgba(19, 26, 140, 0.6) 100%),url(${apiConfig.originalImage(
                        movieDetail.backdrop_path
                    )})`,
                }}
            >
                <div className="px-8 grid grid-cols-12 m-auto mt-8 mobile:flex mobile:flex-col">
                    <div className="items-start p-16 col-start-2 col-span-4 flex justify-center laptop:p-1 tablet:p-2 tablet:col-start-1 tablet:col-span-5">
                        <img
                            style={{
                                boxShadow:
                                    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                            }}
                            className="h-[750px] laptop:h-[590px] rounded-[20px] tablet:h-[750px] mobile:h-[400px]"
                            src={`${apiConfig.w500Image(
                                movieDetail.poster_path
                            )}`}
                        />
                    </div>
                    <div className="flex flex-col col-end-13 col-start-6 mobile:mt-[20px]">
                        <div className="tablet:text-[2rem] text-6xl font-black text-ellipsis p-14 text-left  mobile:p-0 mobile:leading-[1.4] tablet:p-8 mobile:text-[2rem] mobile:text-center">
                            <p>{movieDetail.original_title}</p>
                        </div>

                        <div className="text-ellipsis">
                            <p className="text-lg text-ellipsis font-bold tablet:text-[1rem] text-left px-14 tablet:px-8 mobile:text-[1rem] mobile:p-0 mobile:mt-[20px] mobile:text-center">
                                {movieDetail.overview}
                            </p>
                        </div>
                        <div className="px-14 flex justify-start h-[60px] my-6 tablet:px-0 tablet:mx-4 table:justify-around mobile:justify-center">
                            <span className="h-full tablet:mr-0 mr-8 hover:drop-shadow-xl leading-[60px] transition-all hover:scale-105">
                                <a className="block mobile:px-[5px] leading-[60px] px-[30px] tablet:p-0 tablet:ml-4 tablet:rounded-[1rem] rounded-[2rem] font-bold bg-main-color transition-all cursor-pointer ">
                                    Watch now
                                </a>
                            </span>
                        </div>
                        <div className="mx-14 tablet:mx-4">
                            <div className="font-bold text-2xl py-4">Cast</div>
                            <div className="flex flex-wrap">
                                <Swiper
                                    slidesPerView={`${slidePerView}`}
                                    spaceBetween={10}
                                    freeMode={true}
                                    modules={[FreeMode]}
                                    className="mySwiper"
                                >
                                    {movieCredit?.map((cast, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="mobile:w-[70%] flex flex-col w-full h-[100%] bg-transparent cursor-pointer">
                                                    <div
                                                        className=" transition-all hover:scale-105 h-[100%] w-full bg-cover bg-center rounded-[20px] bg-no-repeat min-h-[200px]"
                                                        style={{
                                                            backgroundImage: `url(${apiConfig.originalImage(
                                                                cast.profile_path
                                                            )})`,
                                                        }}
                                                    ></div>
                                                    <div className="mobile:text-center font-bold text-[15px] text-left mt-6 truncate break-all">
                                                        {cast.name}
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-2xl font-bold mx-10 mb-8">Genres</div>
                <div className="flex flex-wrap my-6 truncate justify-start tablet:justify-center mobile:justify-center mx-10">
                    {genres?.map((genre, index) => {
                        return (
                            <div
                                key={index}
                                className="px-6 py-2 rounded-[15px] border-r-text-color mr-2 border-2"
                            >
                                {genre.name}
                            </div>
                        );
                    })}
                </div>
                <div className="my-6 h-[400px] mx-10">
                    <div className="font-bold text-2xl py-4">Similar</div>
                    <Swiper
                        slidesPerView={`${slidePerView}`}
                        spaceBetween={10}
                        freeMode={true}
                        modules={[FreeMode]}
                        className="mySwiper"
                    >
                        {movieSimilar.map((film, index) => {
                            return (
                                <SwiperSlide>
                                    <div
                                        onClick={() => {
                                            navigate(`/movies/${film.id}`)
                                           
                                        }}
                                        key={index}
                                        className="mobile:w-[70%] flex flex-col w-full h-[100%] bg-transparent cursor-pointer"
                                    >
                                        <div
                                            className=" transition-all hover:scale-105 h-[100%] w-full bg-cover bg-center rounded-[20px] bg-no-repeat min-h-[200px]"
                                            style={{
                                                backgroundImage: `url(${apiConfig.originalImage(
                                                    film.backdrop_path
                                                )})`,
                                            }}
                                        ></div>
                                        <div className="mobile:text-center font-bold text-[15px] text-left mt-6 truncate break-all">
                                            {film.original_title}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Movie;
