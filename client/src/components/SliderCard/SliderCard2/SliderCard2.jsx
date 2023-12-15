import React from 'react';
import "./SliderCard2.css";

const SliderCard2 = () => {
    return (
        <div className="slide_data slide_data_2">
            <div className="info">
                <div className="sale_info">
                    <h2>Sale!</h2>
                    <div className="discount_txt">
                        <span>up to</span>
                        <span>70</span>
                        <p> <span>%</span> <span>off</span> </p>
                    </div>

                </div>
                <p className="info_txt">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea vel eaque, dolore provident culpa enim praesentium voluptatum, alias facere, dolor repellendus numquam. Officia atque culpa iure reiciendis quasi, repellendus unde nulla nisi fuga doloremque iste voluptatem
                </p>
            </div>
            <div className="img">
                <img src="./images/Slider1/img2.png" alt="" />
            </div>
        </div>
    )
}

export default SliderCard2