import React, { useState, useEffect } from 'react';
import "./slider.css";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import SliderFn from './SliderFn';
import SliderCard1 from '../SliderCard/SliderCard1/SliderCard1';
import SliderCard2 from '../SliderCard/SliderCard2/SliderCard2';
import SliderCard3 from '../SliderCard/SliderCard3/SliderCard3';

const Slider = () => {

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    let [scrollPos, setScrollPos] = useState(0);

    const handleSlide = (val) => {
        SliderFn.handleSlide(val, setScrollPos)
    }

    useEffect(() => {
        SliderFn.showHideArrow(scrollPos);
        // eslint-disable-next-line
    }, [scrollPos]);

    return (
        <div className="slider">
            <div className="slider_wrapper">
                <div className="slides">
                    <SliderCard1 />
                </div>
                <div className="slides slide-2">
                    <SliderCard2 />
                </div>
                <div className="slides slide-3">
                    <SliderCard3 />
                </div>
                <div className="slides">
                    <img src={data[0]} alt="" />
                </div>
                <div className="slides">
                    <img src={data[1]} alt="" />
                </div>
            </div>
            <div className="slide_buttons">
                <button className='leftArr' onClick={() => handleSlide("left")} > <ArrowLeftOutlinedIcon fontSize="large" /> </button>
                <button className='rightArr' onClick={() => handleSlide("right")}><ArrowRightOutlinedIcon fontSize="large" /> </button>
            </div>
        </div>
    )
}

export default Slider