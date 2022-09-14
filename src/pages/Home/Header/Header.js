import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_LOADING } from "../../../redux/types/types";
import { HIDE_SEARCH_FILM } from "../../../redux/types/FilmHome/types";
function Header() {
    const shrink = useRef(null);
    const dispatch = useDispatch();
    const [bgColor, setBgColor] = useState("transparent");
    useEffect(() => {
        const shrinkTop = () => {
            if (
                document.body.scrollTop > 100 ||
                document.documentElement.scrollTop > 100
            ) {
                shrink?.current.classList.remove("h-header");
                shrink?.current.classList.add("h-header_shrink");
                setBgColor("bg-body-bg");
            } else {
                shrink?.current.classList.remove("h-header_shrink");
                shrink?.current.classList.add("h-header");
                setBgColor("transparent");
            }
        };
        window.addEventListener("scroll", shrinkTop);
        return () => {
            window.removeEventListener("scroll", shrinkTop);
        };
    }, []);
    return (
        <header
            // style={{
            //     backgroundImage:
            //         "url(" + require("../../../assets/Img/footer-bg.jpg") + ")",
            // }}
            ref={shrink}
            className={`w-full fixed top-0 left-0 ${bgColor} z-50 h-header block`}
        >
            <div className="h-[100%] flex justify-between ml-8 px-16 tablet:px-4 mobile:justify-center">
                <div
                    className={`font-bold text-text-color text-2xl flex space-x-4 tablet:text-lg`}
                >
                    <Link
                        to="/home"
                        className="w-20 h-full m-auto"
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                    >
                        {/* <img
                            src={require("../../../assets/Img/tmovie.png")}
                            className="block"
                        /> */}
                        <svg
                            width="200"
                            height="80"
                            viewBox="0 0 226.2 87.83997999654625"
                            class="css-1j8o68f"
                        >
                            <defs id="SvgjsDefs4207"></defs>
                            <g
                                id="SvgjsG4208"
                                featurekey="5TMTKC-0"
                                transform="matrix(0.16065518937637926,0,0,0.16065518937637926,-2.847708897723627,-5.139082156341809)"
                                fill="#ffd460"
                            >
                                <metadata xmlns="http://www.w3.org/2000/svg">
                                    Created by potrace 1.14, written by Peter
                                    Selinger 2001-2017
                                </metadata>
                                <g
                                    xmlns="http://www.w3.org/2000/svg"
                                    transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)"
                                    fill="#ffd460"
                                    stroke="none"
                                >
                                    <path d="M2983 5664 c-145 -21 -253 -50 -354 -95 -52 -23 -101 -41 -109 -41 -8 0 -49 8 -90 17 -109 25 -328 16 -467 -19 -189 -47 -375 -133 -559 -257 -457 -308 -820 -859 -875 -1330 -12 -103 -12 -104 -56 -149 -266 -269 -364 -809 -247 -1355 89 -417 370 -890 653 -1098 93 -68 99 -74 110 -122 6 -27 31 -91 56 -141 139 -287 454 -553 840 -709 464 -187 1056 -204 1443 -40 l109 45 69 -17 c105 -26 310 -24 443 6 410 90 815 361 1096 736 142 188 209 306 288 505 56 140 84 246 95 365 9 89 10 90 57 139 133 137 230 356 275 621 20 114 22 154 17 325 -7 284 -43 463 -142 716 -133 341 -338 630 -571 805 -60 45 -94 77 -94 89 0 33 -46 146 -91 226 -193 338 -651 640 -1126 744 -228 50 -563 65 -770 34z m405 -25 c411 -45 835 -240 1103 -508 114 -114 227 -274 253 -358 l7 -21 -63 20 c-80 26 -265 35 -379 18 -237 -34 -482 -151 -672 -320 -72 -65 -167 -208 -208 -314 -55 -141 -72 -249 -66 -416 3 -80 9 -156 13 -169 l7 -24 -184 6 c-173 5 -401 35 -421 55 -4 4 10 41 31 82 178 341 274 771 242 1081 -26 246 -112 433 -190 414 -53 -13 -83 -39 -102 -88 l-19 -48 34 -62 c81 -145 122 -344 112 -542 -12 -239 -82 -530 -178 -737 -31 -67 -33 -70 -62 -64 -42 9 -177 68 -244 108 -72 43 -193 156 -247 233 -100 140 -150 282 -165 461 -19 248 36 504 154 705 46 77 126 174 175 208 27 20 28 20 127 -6 72 -18 117 -24 166 -21 37 2 70 6 73 9 6 7 -25 46 -96 120 l-46 49 73 30 c114 47 256 79 459 103 67 8 222 6 313 -4z m-1126 -245 l38 -7 -74 -78 c-56 -60 -87 -105 -129 -186 -103 -203 -143 -384 -133 -608 8 -189 28 -281 86 -400 101 -205 250 -350 472 -458 70 -34 127 -66 128 -72 1 -50 -332 -509 -352 -485 -2 3 -31 45 -63 94 -207 315 -478 567 -763 710 -205 103 -447 142 -482 77 -5 -10 -12 -37 -16 -60 -6 -37 -3 -45 29 -84 l36 -44 103 -6 c282 -17 542 -159 838 -457 74 -75 162 -174 195 -219 l59 -84 -44 -39 c-130 -114 -285 -192 -439 -224 -112 -22 -304 -15 -409 15 -338 98 -665 405 -761 715 -32 105 -31 110 57 206 47 52 87 107 101 139 25 58 23 68 -7 52 -12 -6 -38 -11 -60 -11 -22 0 -59 -7 -82 -15 -23 -8 -43 -15 -44 -15 -1 0 1 30 5 68 21 195 130 475 261 672 264 395 736 717 1150 785 157 25 233 30 300 19z m2433 -655 l70 -24 33 -109 c20 -68 45 -126 65 -154 36 -51 57 -63 57 -35 0 11 10 39 21 63 12 24 24 61 27 82 2 21 8 38 12 38 14 0 136 -99 186 -151 248 -261 399 -549 469 -894 81 -406 50 -747 -98 -1068 -34 -74 -94 -167 -107 -167 -3 0 -12 28 -19 61 -38 185 -214 425 -417 571 -86 61 -237 140 -354 184 -72 27 -82 28 -250 28 -162 0 -182 -2 -265 -28 -116 -35 -253 -103 -344 -172 -40 -30 -76 -54 -80 -54 -11 0 -96 147 -141 243 -42 91 -115 295 -109 301 2 3 65 9 139 15 314 26 546 86 790 204 198 96 367 230 455 360 49 72 48 115 -2 157 -34 28 -43 31 -86 25 -67 -8 -68 -9 -112 -82 -22 -37 -76 -103 -120 -148 -170 -173 -415 -295 -760 -380 -93 -23 -324 -58 -333 -50 -12 10 -32 178 -32 265 0 241 82 441 250 611 161 163 355 265 608 320 127 28 349 22 447 -12z m-4146 -1242 c60 -231 282 -491 544 -636 208 -115 382 -154 580 -131 176 20 364 95 503 201 34 25 66 49 72 53 13 8 88 -112 143 -229 40 -86 119 -296 119 -315 0 -6 -28 -10 -63 -10 -95 0 -307 -27 -435 -56 -330 -74 -627 -226 -804 -413 -136 -143 -154 -205 -77 -261 34 -24 43 -26 81 -19 24 4 48 8 54 9 6 0 32 34 59 76 140 222 402 391 765 494 134 38 275 66 371 75 l76 7 14 -68 c20 -101 18 -332 -5 -414 -23 -84 -72 -190 -128 -277 -134 -206 -405 -374 -708 -439 -122 -26 -318 -24 -425 5 -43 12 -83 25 -87 29 -4 4 -22 54 -39 112 -31 104 -59 159 -98 194 -21 19 -21 19 -21 -5 0 -14 -5 -30 -11 -36 -6 -6 -20 -43 -32 -82 l-22 -71 -80 64 c-115 92 -256 256 -345 401 -112 182 -192 393 -237 623 -24 122 -27 161 -27 357 -1 194 2 234 23 335 24 121 73 265 124 365 30 61 88 148 94 142 1 -2 12 -38 22 -80z m2411 14 c105 -22 219 -37 351 -46 l86 -7 26 -97 c34 -130 88 -272 154 -408 l55 -111 -43 -39 c-71 -64 -227 -252 -302 -363 -43 -65 -76 -105 -86 -104 -9 1 -61 13 -116 27 -135 35 -267 56 -406 64 l-117 6 -22 86 c-33 127 -95 291 -158 418 l-55 112 91 96 c103 108 208 239 277 349 l47 74 61 -19 c34 -10 105 -28 157 -38z m1639 -392 c99 -25 279 -114 377 -187 144 -107 280 -265 352 -409 31 -61 72 -190 72 -226 0 -11 -33 -54 -74 -96 -66 -67 -126 -158 -126 -190 0 -13 51 -7 144 15 32 8 61 12 64 9 13 -13 -22 -188 -62 -309 -88 -266 -213 -473 -410 -674 -342 -351 -766 -552 -1157 -552 -116 0 -132 8 -89 43 128 108 251 353 291 577 18 105 16 334 -5 449 -38 216 -170 422 -359 562 -74 55 -214 132 -285 157 l-33 11 16 32 c65 124 191 305 297 423 l43 48 61 -93 c272 -416 672 -732 1022 -809 134 -30 209 -24 230 17 5 10 12 37 15 60 5 38 1 47 -31 83 -37 41 -37 41 -122 46 -197 10 -399 89 -593 230 -92 66 -236 196 -317 285 -83 91 -189 228 -190 245 0 11 96 91 173 143 95 64 227 114 349 131 88 12 256 2 347 -21z m-1681 -784 c105 -13 262 -41 268 -48 1 -1 -25 -56 -57 -122 -69 -141 -138 -325 -168 -445 -75 -306 -79 -613 -11 -820 59 -175 104 -216 194 -174 27 13 38 28 54 69 l19 53 -33 58 c-147 259 -151 628 -13 1079 28 89 92 247 109 268 8 9 128 -31 200 -68 187 -95 319 -233 410 -429 64 -138 75 -196 75 -406 0 -169 -3 -195 -28 -294 -50 -200 -136 -362 -251 -475 l-65 -65 -120 28 c-91 22 -131 27 -170 21 -28 -4 -53 -10 -56 -15 -5 -8 39 -63 99 -123 21 -21 37 -40 35 -42 -17 -15 -141 -59 -237 -84 -174 -43 -287 -55 -490 -48 -205 6 -308 25 -511 93 -382 127 -686 344 -878 629 -45 66 -89 152 -82 159 2 3 36 -5 74 -16 57 -17 96 -21 210 -21 255 1 449 63 674 214 173 115 279 239 352 409 64 152 93 370 70 533 -6 44 -9 83 -5 88 8 14 196 11 332 -6z"></path>
                                </g>
                            </g>
                            <g
                                id="SvgjsG4209"
                                featurekey="nameLeftFeature-0"
                                transform="matrix(2.5714283962639133,0,0,2.5714283962639133,103.57142900934022,11.857146272853695)"
                                fill="#ffd460"
                            >
                                <path d="M7.64 16.66 l-4.14 -7.42 l0 10.26 l-1 0 l0 -14 l6.3 11.16 l-1.16 0 z M14 19.5 l-1 0 l0 -10.26 l-3.9 6.9 l-6 -10.64 l1.14 0 l4.86 8.66 l4.9 -8.66 l0 14 z M12.26 5.5 l1.14 0 l-4.3 7.6 l-0.56 -0.94 z M5 19.5 l-1 0 l0 -8.34 l1 1.74 l0 6.6 z M11.5 19.5 l0 -6.6 l1 -1.74 l0 8.34 l-1 0 z M19 5.5 l1 0 l0 14 l-1 0 l0 -14 z M20.5 5.5 l1 0 l0 14 l-1 0 l0 -14 z"></path>
                            </g>
                            <g
                                id="SvgjsG4210"
                                featurekey="nameRightFeature-0"
                                transform="matrix(2.4,0,0,2.4,166.2,14)"
                                fill="#ffd460"
                            >
                                <path d="M5.5 20 l-3.5 0 l0 -15 l2.5 0 l3.5 6.2 l0 -6.2 l3.5 0 l0 15 l-2.5 0 l-3.5 -6.2 l0 6.2 z M3.5 9.24 l5.76 10.26 l1.14 0 l-7.9 -14 l0 14 l1 0 l0 -10.26 z M3.1 5.5 l7.9 14 l0 -14 l-1 0 l0 10.26 l-5.76 -10.26 l-1.14 0 z M8.5 12.059999999999999 l1 1.74 l0 -8.3 l-1 0 l0 6.56 z M5 12.9 l-1 -1.74 l0 8.34 l1 0 l0 -6.6 z M19 16.5 l0 3.5 l-3.5 0 l0 -15 l3.5 0 l0 8 l2.5 0 l0 -8 l3.5 0 l0 15 l-3.5 0 l0 -3.5 l-2.5 0 z M17 5.5 l-1 0 l0 14 l1 0 l0 -5 l5.64 0 l-1 -1 l-4.64 0 l0 -8 z M17.5 13 l1 0 l0 -7.5 l-1 0 l0 7.5 z M18.9 16 l4.6 0 l0 3.5 l1 0 l0 -14 l-1 0 l0 9.5 l-5.66 0 z M22 5.5 l0 7.64 l1 0.96 l0 -8.6 l-1 0 z M18.5 19.5 l0 -3.14 l-1 -1 l0 4.14 l1 0 z M23 16.5 l-1 0 l0 3 l1 0 l0 -3 z"></path>
                            </g>
                        </svg>
                    </Link>
                </div>
                <ul
                    className={`flex justify-between font-bold text-text-color text-2xl  space-x-4 tablet:text-lg mobile:fixed mobile:p-4 mobile:left-0 mobile:bottom-0 mobile:right-0 mobile:bg-body-bg`}
                >
                    <li className="relative m-auto mobile:w-1/3 text-center cursor-pointer">
                        <Link
                            to="/home"
                            className="py-2 mobile:py-0 mobile:after:hover-w-0 mobile:w-full after:absolute after:w-0 after:bg-main-color after:left-0 after:top-[3rem] after:h-[3px] after:transition-all after:hover:w-full"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="relative m-auto  mobile:w-1/3 mobile:text-center cursor-pointer">
                        <NavLink
                            onClick={() => {
                                console.log("click");
                                dispatch({
                                    type: HIDE_SEARCH_FILM,
                                });
                            }}
                            to="/movies/search/popular"
                            className="py-2 after:absolute after:w-0 mobile:after:hover-w-0 after:bg-main-color after:left-0 after:top-[3rem] after:h-[3px] after:transition-all after:hover:w-full"
                        >
                            Movie
                        </NavLink>
                    </li>
                    <li className="relative m-auto  mobile:w-1/3 mobile:text-center cursor-pointer">
                        <Link
                            to="/tv/search/popular"
                            className="py-2 after:absolute after:w-0 after:bg-main-color mobile:after:hover-w-0 after:left-0 after:top-[3rem] after:h-[3px] after:transition-all after:hover:w-full mobile:min-w-full"
                        >
                            TV Series
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
