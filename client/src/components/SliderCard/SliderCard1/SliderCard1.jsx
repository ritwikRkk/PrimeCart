import React from 'react';
import "./SliderCard1.css";

const SliderCard1 = () => {
    return (
        <div className="slide_data">
            <div className="img">
                <img src="./images/Slider1/img1.png" alt="" />
            </div>
            <div className="info">
                <h2>New Arrivals</h2>
                <p className="p1">Just <br /> for</p>
                <div className="info_banner">
                    <p className="p2"> <span>For Online</span> <br /> <span>order</span> </p>
                    <p className="p3"> <span> 30%</span> <br /> <span>Off</span> </p>
                </div>
            </div>
        </div>
    )
}

export default SliderCard1