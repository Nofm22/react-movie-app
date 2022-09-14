import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { apiConfig } from "../services/apiConfig";
import { useSelector, useDispatch } from "react-redux";
import {
    ChakraProvider,
    Button,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    extendTheme,
    Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
    GET_FILM_HOME,
    SearchFilm,
    getUpcomingfilm,
    getTopRatedFilm,
    getPopularTV,
    getTopRatedTV,
} from "../redux/actions/GetFilm";
import { SET_HIDE_LOADING } from "../redux/types/types";
function MovieSearch() {
    const { category } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const type = location.pathname.split('/')[1];
    useEffect(() => {
        
        dispatch({
            type:SET_HIDE_LOADING,
        })
        if (location.pathname === "/movies/search/popular") {
            dispatch(GET_FILM_HOME(1));
        } else if (location.pathname === "/movies/search/upcoming") {
            dispatch(getUpcomingfilm(1));
        } else if(location.pathname === '/movies/search/toprated') {
            dispatch(getTopRatedFilm(1));
        } else if(location.pathname === '/tv/search/popular') {
            dispatch(getPopularTV(1))
        } else if(location.pathname === '/tv/search/toprated') {
            dispatch(getTopRatedTV(1));
        }
    }, [location]);
    const { movieDetail } = useSelector((state) => state.DetailFilmReducers);
    const [value, setValue] = useState("");
    const { movie, totalPage, searchFilm } = useSelector(
        (state) => state.FilmHome
    );
    const page = Array.from({ length: totalPage }, (v, i) => i + 1);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === "") {
            console.log("empty");
            searchFilm.length = 0;
            setValue(value);
            return;
        }
        console.log(value);

        dispatch(SearchFilm(value, 1));
    };
    const handleChange = (e) => {
        let { name, value } = e.target;
        setValue(value);
    };
    return (
        <section className="w-full h-auto flex flex-col">
            <div
                className="py-[8rem] bg-body-bg h-auto text-text-color bg-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage:
                        "linear-gradient(234deg, rgba(0, 0, 0, 0.9) 43%, rgba(19, 26, 140, 0.6) 90%),url('/Image/moviesBg.jpg')",
                }}
            >
                <div className="text-left text-5xl font-bold mt-16 ml-24 tablet:text-center tablet:ml-0 tablet:text-3xl mobile:text-xl">
                    {category.charAt(0).toUpperCase() + category.slice(1) + " "}
                </div>
            </div>
            <div className="w-full h-auto bg-body-bg text-text-color">
                <div className="mx-24 tablet:m-0">
                    <div className="flex w-full h-auto mt-16">
                        <form
                            className="float-left laptop:m-auto tablet:m-auto mobile:m-auto"
                            onSubmit={handleSubmit}
                        >
                            <input
                                value={value}
                                type="text"
                                name="params"
                                className="h-full py-1 pl-4 pr-64 rounded-md text-body-bg bg-transparent focus:outline-none tablet:pr-32 mobile:pr-[2rem]"
                                placeholder="Search..."
                                onChange={handleChange}
                            />
                            <button className="ml-4 h-[100%] font-bold text-xl mr-4 m-auto mobile:text-[1rem] border-2 px-2 rounded-[10px]">
                                Search
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-wrap mt-16 justify-start tablet:justify-center laptop:justify-center mobile:justify-center">
                        <Page
                            dispatch={dispatch}
                            value={value}
                            totalPage={page}
                            movie={movie}
                            navigate={navigate}
                            searchFilm={searchFilm}
                            movieDetail={movieDetail}
                            category={category}
                            location={location}
                            type={type}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
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
        },
    },
});
const Page = (props) => {
    const tabStart = useRef(0);
    const tabEnd = useRef(5);
    const [tabIndex, setTabIndex] = useState(1);
    const [data, setData] = useState([
        <ArrowBackIcon />,
        ...props.totalPage.slice(tabStart.current, tabEnd.current),
        <ArrowForwardIcon />,
    ]);
    useEffect(() => {
        if (props.value === "") {
            props.searchFilm.length = 0;
            tabEnd.current = 5;
            setTabIndex(1);
            setData([
                <ArrowBackIcon />,
                ...props.totalPage.slice(tabStart.current, tabEnd.current),
                <ArrowForwardIcon />,
            ]);
        } else {
            tabEnd.current = 0;
            setData([<ArrowBackIcon />, <ArrowForwardIcon />]);
            setTabIndex(0);
        }
    }, [tabEnd, props.value]);

    let filmRender =
        props.searchFilm?.length === 0 ? props.movie : props.searchFilm;

    let count = useRef(0);

    return (
        <ChakraProvider theme={theme}>
            <Tabs
                variant="unstyled"
                isManual
                index={tabIndex}
                isLazy
                //bgGradient="linear(194deg, rgba(0,0,0,0.9) 49%, rgba(20,31,200,0.8) 99%)"
                w="100%"
                mb="50px"
                onChange={(index) => {
                    if (index === 0) {
                        console.log("case1  ");

                        if (tabStart.current > 0) {
                            tabEnd.current = tabStart.current;
                            tabStart.current =
                                tabStart.current - 5 > 0
                                    ? tabStart.current - 5
                                    : 0;
                            count.current = count.current - 1;
                            console.log("count.current", count.current);
                            setTabIndex(count.current * 5);
                            setData([
                                <ArrowBackIcon />,
                                ...props.totalPage.slice(
                                    tabStart.current,
                                    tabEnd.current
                                ),
                                <ArrowForwardIcon />,
                            ]);
                        }
                    } else if (index === data.length - 1) {
                        console.log("case2");
                        if (tabEnd.current < props.totalPage.length - 1) {
                            tabStart.current = tabEnd.current;
                            tabEnd.current =
                                props.totalPage.length - tabEnd.current > 5
                                    ? tabEnd.current + 5
                                    : props.totalPage.length;
                            count.current = count.current + 1;
                            console.log("count.current", count.current);
                            setTabIndex(count.current * 5);
                            setData([
                                <ArrowBackIcon />,
                                ...props.totalPage.slice(
                                    tabStart.current,
                                    tabEnd.current
                                ),
                                <ArrowForwardIcon />,
                            ]);
                        }
                    } else {
                        console.log(
                            "count.current",
                            count.current,
                            "index:",
                            index
                        );
                        setTabIndex(count.current * 5 + index);
                    }
                }}
            >
                <TabPanels>
                    {props.totalPage?.map((p, index) => {
                        return (
                            <TabPanel>
                                <div className="flex flex-wrap justify-start tablet:justify-center laptop:justify-center mobile:justify-center mb-16">
                                    {filmRender?.map((film, index) => {
                                        let image =
                                            film.backdrop_path !== undefined
                                                ? film.backdrop_path
                                                : film.logo_path;
                                        let title = film.backdrop_path
                                            ? film.title
                                            : film.name;
                                        return (
                                            <>
                                                {image && (
                                                    <div
                                                        onClick={() => {
                                                            props.navigate(
                                                                `/${props.type}/${film.id}`
                                                            );
                                                        }}
                                                        className="w-[250px] max-w-[230px] min-h-[350px] mr-8 my-8 mobile:mr-0"
                                                        key={index}
                                                    >
                                                        <div
                                                            className="transition-all hover:scale-105 h-[100%] w-full bg-cover bg-center rounded-[20px] bg-no-repeat min-h-[200px]"
                                                            style={{
                                                                backgroundImage:
                                                                    image !==
                                                                    null
                                                                        ? `url(${apiConfig.originalImage(
                                                                              image
                                                                          )})`
                                                                        : "url('https://png.pngtree.com/png-vector/20210221/ourlarge/pngtree-error-404-not-found-glitch-effect-png-image_2928215.jpg')",
                                                            }}
                                                        ></div>
                                                        <div className="mobile:text-center font-bold text-[15px] text-left mt-6 truncate break-all">
                                                            {title ? title : film.name}
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                        );
                                    })}
                                </div>
                            </TabPanel>
                        );
                    })}
                </TabPanels>
                <TabList w="20%" m="auto" justifyContent="center">
                    {data?.map((tab, index) => {
                        return (
                            <Tab
                                fontSize="12px"
                                _focus={{ boxShadow: "none", bg: "none" }}
                                borderRadius="none"
                                position="relative"
                                key={index}
                                p={1}
                                as={Button}
                                border="1px solid #888"
                                onClick={() => {
                                    window.scrollTo(100, 100);
                                    if (props.location.pathname === "/movies/search/popular") {
                                        props.dispatch(
                                            GET_FILM_HOME(tabIndex + 1)
                                        );
                                    } else if (props.location.pathname === "/movies/search/upcoming") {
                                        props.dispatch(
                                            getUpcomingfilm(tabIndex + 1)
                                        );
                                    } else if(props.location.pathname === '/movies/search/toprated') {
                                        props.dispatch(getTopRatedFilm(tabIndex + 1));
                                    } else if(props.location.pathname === '/tv/search/popular') {
                                        props.dispatch(getPopularTV(tabIndex + 1))
                                    } else if(props.location.pathname === '/tv/search/toprated') {
                                        props.dispatch(getTopRatedTV(tabIndex + 1));
                                    }
                                }}
                            >
                                <Text noOfLines={[1, 2, 3, 4, 5]}>{tab}</Text>
                            </Tab>
                        );
                    })}
                </TabList>
            </Tabs>
        </ChakraProvider>
    );
};
export default MovieSearch;
