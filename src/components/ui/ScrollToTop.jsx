import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import './ScrollToTop.css';

const ScrollToTop = () => {

    const [goTop, setGoTop] = useState();

    const { pathname } = useLocation();

    const scrollToTop = () => {
        setGoTop(
            prev => !prev
        );
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    },[pathname,goTop])

    return(
        <div className="scroll-to-top" onClick={scrollToTop} ></div>
    );
}

export default ScrollToTop;