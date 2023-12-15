import React from 'react';
import "./FeaturedProducts.css";
import Card from '../Card/Card';
// import { useSelector } from 'react-redux';

const FeaturedProducts = ({ type, data }) => {

    // const shopArr= useSelector(state => state.shop.shopArr);
    // console.log(shopArr);

    // const data = [
    //     {
    //         id: 1,
    //         img: [
    //             "http://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //             "http://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //             "http://images.pexels.com/photos/9741917/pexels-photo-9741917.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         ],
    //         title: "Long sleeve Graphics T-shirt",
    //         // title: "T-shirt",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12
    //     },
    //     {
    //         id: 2,
    //         img: [
    //             "http://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //             "http://images.pexels.com/photos/16168937/pexels-photo-16168937.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //             "http://images.pexels.com/photos/5812168/pexels-photo-5812168.jpeg?auto=compress&cs=tinysrgb&w=1600"
    //         ],
    //         title: "Coat",
    //         isNew: false,
    //         oldPrice: 19,
    //         price: 12
    //     },
    //     {
    //         id: 3,
    //         img: [
    //             "http://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //             "http://images.pexels.com/photos/18127739/pexels-photo-18127739.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //             "http://images.pexels.com/photos/16934257/pexels-photo-16934257.jpeg?auto=compress&cs=tinysrgb&w=1600"
    //         ],
    //         title: "Skirt",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12
    //     },
    //     {
    //         id: 4,
    //         img: [
    //             "http://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //             "http://images.pexels.com/photos/18165296/pexels-photo-18165296.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //             "http://images.pexels.com/photos/18120578/pexels-photo-18120578.jpeg?auto=compress&cs=tinysrgb&w=1600"
    //         ],
    //         title: "Hat",
    //         isNew: false,
    //         oldPrice: 19,
    //         price: 12
    //     },
    // ];

    const product = (item) => {
        return (
            <Card key={item.id} item={item.attributes} id={item.id} />
        )
    }

    return (
        <div className="featuredProducts">
            <div className="header">
                <h1> {type} Products </h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab voluptate aliquam voluptates? Soluta error vitae, recusandae eius veniam, consequatur iure harum cumque sit debitis quibusdam possimus consectetur velit dolore impedit?</p>
            </div>
            <div className="products">
                {data.map(product)}
            </div>
        </div>
    )
}

export default FeaturedProducts