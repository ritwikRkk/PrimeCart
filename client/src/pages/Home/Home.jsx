import React, { useEffect, useState } from 'react';
import Slider from '../../components/Slider/Slider';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import { Categories } from '../../components/Categories/Categories';
import { useSelector } from 'react-redux';


const Home = () => {

  const shop = useSelector(state => state.shop);
  const [featured, setFeatured] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    if (!shop.isLoading) {
      // console.log(shop.shopArr);
      let featuredProducts = shop.shopArr.filter((elem) => elem.attributes.type === "featured");
      setFeatured(featuredProducts.slice(0, 4));

      let trendingProducts = shop.shopArr.filter((elem) => elem.attributes.type === "trending");
      setTrending(trendingProducts.slice(0, 4));

      // console.log(featuredProducts);
    }
    // console.log(shop.isLoading);
    // eslint-disable-next-line
  }, [shop.isLoading])


  return (
    <>
      {/* <div style={{height: "100vh"}}>Home</div> */}
      <Slider />
      <FeaturedProducts type="Featured" data={featured} />
      <Categories />
      <FeaturedProducts type="Trending" data={trending} />

    </>
  )
}

export default Home