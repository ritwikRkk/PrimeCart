import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
import { useParams } from 'react-router-dom';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
// import { useSelector } from 'react-redux';
import "./Store.css";
import shopApi from '../../api/modules/shop.api';

const Store = () => {

  // const shop = useSelector(state => state.shop);
  // console.log(shop.shopArr)
  const catId = parseInt(useParams().id);
  // const [maxPrice, setMaxPrice] = useState(1000);
  // const [sort, setSort] = useState(null);
  // console.log(id);

  const openFilter = () => {
    let left_container = document.querySelector(".left_container");
    left_container.classList.add("active");
    document.body.classList.add("overflow");
  }
  const closeFilter = () => {
    let left_container = document.querySelector(".left_container");
    left_container.classList.remove("active");
    document.body.classList.remove("overflow");
  }

  const [subCategory, setSubCategory] = useState([]);
  const [filter, setFilter] = useState({ subCategory: [], maxPrice: 9999, sort: "", })

  const fetchSubCategory = async () => {
    const subCat = await shopApi.getSubCategory();
    setSubCategory(subCat.data);
    // console.log(subCat);
  }

  useEffect(() => {
    fetchSubCategory();
  }, [])

  // useEffect(() => {
  //   console.log("filter changed")
  // }, [filter])

  const handleFilterSubCategory = (e) => {
    // console.log(e.target.type)
    if (e.target.type === "checkbox") {
      if (e.target.checked) {
        setFilter((prevVal) => {
          return {
            ...prevVal,
            subCategory: [...prevVal.subCategory, e.target.value]
          }
        })
      } else {
        setFilter((prevVal) => {
          return {
            ...prevVal,
            subCategory: [...prevVal.subCategory.filter((elem) => elem !== e.target.value)]
          }
        })
      }
    }
    else if (e.target.type === "range") {
      setFilter((prevVal) => {
        return {
          ...prevVal,
          maxPrice: e.target.value
        }
      })
    }
    else {
      setFilter((prevVal) => {
        return {
          ...prevVal,
          sort: e.target.value
        }
      })
    }
  }

  const clearPriceFilter = () => {
    let radioBtn = document.querySelectorAll("input[type=radio]");
    radioBtn.forEach((elem) => elem.checked = false);
    setFilter((prevVal) => {
      return {
        ...prevVal,
        sort: ""
      }
    })
    // console.log(a);
  }

  const showSubCategory = (elem, index) => {
    return (
      <div className="inputItem" key={index}>
        <input type="checkbox" name={elem.attributes.title} id={elem.id} value={elem.attributes.title} onChange={handleFilterSubCategory} /> <label htmlFor={elem.id}>{elem.attributes.title}</label>
      </div>
    )
  }

  return (
    <>
      {/* <div>Products</div> */}
      <div className="products_container">
        <div className="filter_opener">
          <span>Filter</span>
          <span className="filter_btn" onClick={openFilter}>
            <ArrowDropDownOutlinedIcon />
          </span>
        </div>
        <div className="left_container">
          <div className="filter_closer" onClick={closeFilter}>
            <span>Close</span>
          </div>
          <div className="filterItems">
            <h2>Product Categories</h2>
            {subCategory.map(showSubCategory)}
            {/* <div className="inputItem">
              <input type="checkbox" name="hat" id="1" value={1} /> <label htmlFor="1">hat</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" name="tshirt" id="2" value={2} /> <label htmlFor="2">tshirt</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" name="shoes" id="3" value={3} /> <label htmlFor="3">Shoes</label>
            </div> */}
          </div>
          <div className="filterItems">
            <h2>Filter by Price</h2>
            <div className="inputItem">
              <span>0</span>
              {/* <input type="range" name="" id="" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} /> */}
              <input style={{width: "75%"}} type="range" name="" id="" min={0} max={9999} onChange={handleFilterSubCategory} />
              <span>{filter.maxPrice}</span>
            </div>
          </div>
          <div className="filterItems">
            <div><h2>Sort by</h2> {filter.sort.length>0 && <span onClick={clearPriceFilter}>clear</span>} </div>
            <div className="inputItem">
              {/* <input type="radio" name="price" id="asc" value="asc" onChange={() => setSort("asc")} /> <label htmlFor="asc">Price(Lowest)</label> */}
              <input type="radio" name="price" id="asc" value="asc" onChange={handleFilterSubCategory} /> <label htmlFor="asc">Price(Lowest)</label>
            </div>
            <div className="inputItem">
              {/* <input type="radio" name="price" id="desc" value="desc" onChange={() => setSort("desc")} /> <label htmlFor="desc">Price(Highest)</label> */}
              <input type="radio" name="price" id="desc" value="desc" onChange={handleFilterSubCategory} /> <label htmlFor="desc">Price(Highest)</label>
            </div>
          </div>
        </div>
        <div className="right_container">
          <img className="catImg" src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          {/* {shop.isLoading === false && <List catId={catId} maxPrice={filter.maxPrice} sort={filter.sort} data={shop.shopArr} />} */}
          <List catId={catId} maxPrice={filter.maxPrice} sort={filter.sort} subCat={filter.subCategory}  />
          {/* <List catId={catId} maxPrice={maxPrice} sort={sort} /> */}
          {/* <List catId={catId} maxPrice={maxPrice} sort={sort} /> */}
          {/* <List catId={catId} maxPrice={maxPrice} sort={sort} /> */}
        </div>
      </div>
    </>
  )
}

export default Store