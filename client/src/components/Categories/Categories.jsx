import React from 'react';
import "./Categories.css";
import { Link } from 'react-router-dom';

export const Categories = () => {
    return (
        <div className="categories_container">
            <div className="categories_header">Categories</div>
            <div className="categories">
                <div className="categories_wrapper wrapp-1">
                    <div className="items">
                        <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <Link className="categories_links"> <button> <span className="link_txt" >Sale</span> </button> </Link>
                    </div>
                    <div className="items">
                        <img src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <Link className="categories_links"> <button> <span className="link_txt" >New Season</span> </button> </Link>
                    </div>
                    <div className="items">
                        <img src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <Link className="categories_links"> <button> <span className="link_txt" >Women</span> </button> </Link>
                    </div>
                </div>
                <div className="categories_wrapper wrapp-2">
                    <div className="items">
                        <img src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <Link className="categories_links"> <button> <span className="link_txt" >Men</span> </button> </Link>
                    </div>
                    <div className="items">
                        <img src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <Link className="categories_links"> <button> <span className="link_txt" >Accessories</span> </button> </Link>
                    </div>
                    <div className="items">
                        <img src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <Link className="categories_links"> <button> <span className="link_txt" >Shoes</span> </button> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
