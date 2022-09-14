import React from "react";
import Footer from "../pages/Home/Footer/Footer";
import Header from "../pages/Home/Header/Header";
import { motion } from "framer-motion";
function HomeTemplate(props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
                opacity: 0,
            }}
            transition={{ duration: 0.01 }}
            className="overflow-hidden"
        >
            <Header />
            {props.children}
            <Footer />
        </motion.div>
    );
}

export default HomeTemplate;
