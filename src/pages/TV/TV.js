import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { apiConfig } from "../../services/apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { getTV } from "../../redux/actions/GetDetailFilm";
import { useNavigate } from "react-router-dom";
import {
    ChakraProvider,
    Button,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    extendTheme,
    Text
} from "@chakra-ui/react";

const theme = extendTheme({
    components: {
        Tabs: {
            baseStyle: {
                tab: {
                    _selected: {
                        bg: "#0f0f0f",
                        color: "#fff",
                        borderBottom: "2px solid #fff",
                    },
                    _hover: {
                        bg: "none",
                    },
                    _active: {
                        bg: "none",
                        color: "#fff",
                    },
                    
                    bg: "#0f0f0f",
                    color: "#fff",
                },
            },
            colorScheme: {
                bg: "#fff",
            },
        },
    },
});
function Movie() {
    const location = useLocation();
    useEffect(() => {
        console.log(location.pathname)
        window.scrollTo(0,0);
    },[location])
    const navigate = useNavigate();
    const { id } = useParams();
    const { tvDetail, genres, tvCredit, tvSimilar, tvSeason } = useSelector(
        (state) => state.DetailFilmReducers
    );
    console.log(tvSeason);
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
        dispatch(getTV("tv", id));
    }, [id]);
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
                        tvDetail.backdrop_path
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
                            src={`${apiConfig.w500Image(tvDetail.poster_path)}`}
                        />
                    </div>
                    <div className="flex flex-col col-end-13 col-start-6 mobile:mt-[20px]">
                        <div className="tablet:text-[2rem] text-6xl font-black text-ellipsis p-14 text-left  mobile:p-0 mobile:leading-[1.4] tablet:p-8 mobile:text-[2rem] mobile:text-center">
                            <p>{tvDetail.name}</p>
                        </div>

                        <div className="text-ellipsis">
                            <p className="text-lg text-ellipsis font-bold tablet:text-[1rem] text-left px-14 tablet:px-8 mobile:text-[1rem] mobile:p-0 mobile:mt-[20px] mobile:text-center">
                                {tvDetail.overview}
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
                                    {tvCredit?.map((cast, index) => {
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
                <div className="mx-10">
                    <div className="font-bold text-2xl mb-4">Season</div>
                    <Episode tvSeason={tvSeason} />
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
                        {tvSimilar.map((film, index) => {
                            return (
                                <SwiperSlide>
                                    <div
                                        onClick={() => {
                                            window.scrollTo(0,0);
                                            navigate(`/tv/${film.id}`);
                                            
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
                                            {film.name}
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

const Episode = (props) => {
    const [tabIndex, setTabIndex] = useState(0);
    const tabs = ["Tabs 1", "Tabs 2"];
    const renderEpisode = (episode_count) => {
        const episode = [];
        for (let i = 0; i < episode_count; i++) {
            episode.push(
                <div className="min-w-[75px] max-w-[100px] hover:scale-110 transition-all cursor-pointer mb-4 mr-4 font-bold bg-body-bg border-2 border-text-color py-2 text-center rounded-[10px]">
                    {i + 1}
                </div>
            );
        }
        return episode;
    };
    return (
        <ChakraProvider theme={theme}>
            <Tabs
                isTruncated
                variant="unstyled"
                isLazy
                rounded="2xl"
                bgGradient="linear(194deg, rgba(0,0,0,0.9) 49%, rgba(20,31,200,0.8) 99%)"
                w="100%"
                mb="50px"
                onChange={(index) => {
                    console.log(index);
                    setTabIndex(index);
                }}
            >
                <TabList roundedTopLeft="2xl">
                    {props.tvSeason?.map((tab, index) => {
                        return (
                            <Tab
                                key={index}
                                _focus={{ boxShadow: "none" }}
                                borderRadius="none"
                                position="relative"
                                as={Button}
                            >
                                <Text  noOfLines={[1, 2, 3, 4,5]}>{tab.name}</Text>
                            </Tab>
                        );
                    })}
                </TabList>

                <TabPanels p={3} textAlign="center">
                    {props.tvSeason?.map((season, index) => {
                        return (
                            <TabPanel key={index}>
                                <div className="flex flex-wrap">
                                    {renderEpisode(season.episode_count)}
                                </div>
                            </TabPanel>
                        );
                    })}
                </TabPanels>
            </Tabs>
        </ChakraProvider>
    );
};

export default Movie;
