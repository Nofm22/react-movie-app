import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";
import HomeTemplate from "../templates/HomeTemplate";
import Movie from "../pages/Movies/Movie";
import TV from "../pages/TV/TV";
import MovieSearch from "./MovieSearch";
import { AnimatePresence } from "framer-motion";
function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/home"
                    element={
                        <HomeTemplate>
                            <Home />
                        </HomeTemplate>
                    }
                />
                <Route
                    path="/"
                    element={
                        <HomeTemplate>
                            <Home />
                        </HomeTemplate>
                    }
                />
                <Route
                    path="/movies"
                    element={
                        <HomeTemplate>
                            <Movie />
                        </HomeTemplate>
                    }
                />
                <Route
                    path="/movies/:id"
                    element={
                        <HomeTemplate>
                            <Movie />
                        </HomeTemplate>
                    }
                />
                <Route
                    path="/movies/search/:category"
                    element={
                        <HomeTemplate>
                            <MovieSearch />
                        </HomeTemplate>
                    }
                />
                <Route
                    path="/tv/search/:category"
                    element={
                        <HomeTemplate>
                            <MovieSearch />
                        </HomeTemplate>
                    }
                />
                <Route
                    path="/tv/:id"
                    element={
                        <HomeTemplate>
                            <TV />
                        </HomeTemplate>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
