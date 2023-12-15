import React, { useState, useEffect } from 'react';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

import { Link, useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addCartItem, } from '../../store/slices/CartSlice';
import "./Product.css";
import { addWishListItem, deleteWishListItem } from '../../store/slices/WishList';
import shopApi from '../../api/modules/shop.api';
import wishlistApi from '../../api/modules/wishlist.api';
import cartApi from '../../api/modules/cart.api';
import { deleteMsg, msgDetails } from '../../store/slices/MsgSlice';

const Product = () => {

  const productId = parseInt(useParams().id);
  const dispatch = useDispatch();
  const location = useLocation();
  const shopArr = useSelector(state => state.shop.shopArr);
  const cartArr = useSelector(state => state.cart.cartArr);
  const user = useSelector(state => state.user);
  const [favId, setFavId] = useState(null);
  // const cartArr = useSelector(state => state.cart.cartArr);
  // const product = shopArr.filter((item) => item.id === productId);


  // FETCH THE PRODUCT DETAILS
  const [data, setData] = useState(null);
  const fetchProductDetails = async (productId) => {
    let product = await shopApi.getProduct({ productId, qs: { "populate": "*" } });
    setData(product.data);
    // console.log(product);
  }
  useEffect(() => {
    fetchProductDetails(productId)
    // eslint-disable-next-line
  }, [location])
  // END FETCH THE PRODUCT DETAILS

  // CHECK IF THIS PRODUCT IS WHISLISTED OR NOT
  const [fav, setFav] = useState({ isFav: false, favText: "" });
  const wishListArr = useSelector(state => state.wishList.wishListArr)
  useEffect(() => {
    let hasItem = wishListArr.filter(element => element.productId === productId);
    //   console.log(hasItem);
    if (hasItem.length > 0) {
      setFav({ isFav: true, favText: "Remove from wishlist" })
      setFavId(hasItem[0].id)
    } else {
      setFav({ isFav: false, favText: "add to wishlist" });
      setFavId(null);
    }
    // eslint-disable-next-line
  }, [wishListArr, location])
  // END CHECK IF THIS PRODUCT IS WHISLISTED OR NOT

  // ADD THIS PRODUCT TO WISHLIST
  const handleWishList = async (e) => {
    e.preventDefault();
    if (!user.isLoading) {
      //IF USER IS LOGGED IN ADD PRODUCT TO WISH LIST
      // console.log(user);
      let favItem = {
        // uId: item.id,
        productId: productId,
        title: data.attributes.title,
        price: data.attributes.price,
        size: size,
        color: color,
        img: data.attributes.images.data[0].attributes.url,
        user: user.userInfo.id
      }

      if (fav.isFav) {
        let favProduct = await wishlistApi.deleteWishlist(favId);
        // console.log(favProduct);
        if (favProduct.data) {
          dispatch(deleteWishListItem({ id: favId }));
          dispatch(msgDetails({ msgType: "success", msgContent: "Successfully, deleted from favorites" }))
          setTimeout(() => dispatch(deleteMsg()), 3000);
        } else {
          dispatch(msgDetails({ msgType: "failed", msgContent: "Some Error Occured!" }))
          setTimeout(() => dispatch(deleteMsg()), 3000);
        }
      } else {
        let favProduct = await wishlistApi.createWishlist(favItem);
        // console.log(favProduct);
        if (favProduct.data) {
          let data = {
            id: favProduct.data.id,
            ...favProduct.data.attributes
          }
          // console.log(data);
          setFavId(favProduct.data.id)
          dispatch(addWishListItem(data));
          dispatch(msgDetails({ msgType: "success", msgContent: "successfully, Added to Favorites!" }))
          setTimeout(() => dispatch(deleteMsg()), 3000);
        } else {
          dispatch(msgDetails({ msgType: "failed", msgContent: "Some Error Occured!" }))
          setTimeout(() => dispatch(deleteMsg()), 3000);
        }
      }
    }
    else {
      dispatch(msgDetails({ msgType: "failed", msgContent: "Please Login or Sign Up first to add favorites" }))
      setTimeout(() => dispatch(deleteMsg()), 3000);
    }
  }
  // END ADD THIS PRODUCT TO WISHLIST

  // TO SHOW SIMILARITEMS(PRODUCTS)
  const [randomProduct, setRandomProduct] = useState();
  const [simItem, setSimItem] = useState({
    img: "",
    title: "",
    rating: "",
    price: 0,
  });

  const fetchSimDetails = async (productId) => {
    let product = await shopApi.getProduct({ productId, qs: { "populate": "*" } });
    // setData(product.data);
    setSimItem({ img: product.data.attributes.images.data[0].attributes.url, title: product.data.attributes.title, rating: product.data.attributes.rating, price: product.data.attributes.price });
    // console.log(product);
  }

  const genRandomNum = () => {
    // Generate random number between 1  and 4
    let maxVal = shopArr.length;
    // console.log(maxVal);
    return Math.floor(Math.random() * (maxVal - 1 + 1)) + 1;
  }
  useEffect(() => {
    if (shopArr.length > 0) {
      let randomNum = genRandomNum();
      while (randomNum === productId) {
        randomNum = genRandomNum();
      }
      setRandomProduct(randomNum);
      // console.log(shopArr[randomNum]);
      fetchSimDetails(randomNum);
    }
    // eslint-disable-next-line
  }, [productId, shopArr])
  // TO SHOW SIMILARITEMS(PRODUCTS) END


  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("S");
  const [color, setColor] = useState("Red");
  // const imgBaseUrl = "http://localhost:1337";

  const showImgList = (img, index) => {
    return (
      <img key={index} src={`${img.attributes.url}`} className={`${selectedImg === index ? "border" : ""}`} alt="" onClick={() => setSelectedImg(index)} />
    )
  }

  const handleQuantity = (type) => {
    setQuantity((prevVal) => {
      if (type === "inc" && prevVal < 5) {
        return prevVal + 1;
      }
      else if (type === "dec" && prevVal > 1) {
        return prevVal - 1;
      }
      else {
        return prevVal;
      }
    })
  }

  const handleShowHide = (e) => {
    // console.log(e.target.nextSibling);
    e.target.nextSibling.classList.toggle("active");
  }

  const handleSize = (e) => {
    setSize(e.target.value);
    // console.log(e.target.value);
  }
  const handleColor = (e) => {
    setColor(e.target.value);
    // console.log(e.target.value);
  }

  const addToCart = async (e) => {
    let uId = `${productId}${size}${color}`;
    if (!user.isLoading) {
      //IF USER IS LOGGED IN ADD PRODUCT TO WISH LIST
      let item = {
        uId: uId,
        productId: productId,
        title: data.attributes.title,
        price: data.attributes.price,
        quantity: quantity,
        size: size,
        color: color,
        img: data.attributes.images.data[0].attributes.url,
        user: user.userInfo.id
      }

      // IF THISS PORDUCT IS ALREADY IN THE CART, THEN UPDATE IT'S QUANTITY
      let hasItem = cartArr.filter(element => element.uId === uId);
      // console.log(hasItem);

      if (hasItem.length > 0) {
        // update the product quantity
        let cartProduct = await cartApi.updateCart(hasItem[0].id, item);
        // console.log(cartProduct.data)
        if (cartProduct.data) {
          let data = {
            id: cartProduct.data.id,
            ...cartProduct.data.attributes
          }
          dispatch(addCartItem(data));
          dispatch(msgDetails({ msgType: "success", msgContent: "successfully, Added to Cart!" }))
          setTimeout(() => dispatch(deleteMsg()), 3000);
        }
        else {
          dispatch(msgDetails({ msgType: "failed", msgContent: "Some Error Occured!" }))
          setTimeout(() => dispatch(deleteMsg()), 3000);
        }
      } else {
        // add the product as a new item
        let cartProduct = await cartApi.createCart(item);
        if (cartProduct.data) {
          // console.log(cartProduct)
          let data = {
            id: cartProduct.data.id,
            ...cartProduct.data.attributes
          }
          dispatch(addCartItem(data));
          dispatch(msgDetails({ msgType: "success", msgContent: "successfully, Added to Cart!" }))
          setTimeout(() => dispatch(deleteMsg()), 3000);
        } else {
          dispatch(msgDetails({ msgType: "failed", msgContent: "Some Error Occured!" }))
          setTimeout(() => dispatch(deleteMsg()), 3000);
        }
      }

    }
    else {
      dispatch(msgDetails({ msgType: "failed", msgContent: "Please Login or Sign Up first to add items to cart" }))
      setTimeout(() => dispatch(deleteMsg()), 3000);
    }
  }

  return (
    <div className="product">
      {data && <div className="product_wrapper">
        <div className="img_container">
          <div className="image_list">
            {data.attributes.images.data.map(showImgList)}
          </div>
          <div className="main_img">
            <img src={`${data.attributes.images.data[selectedImg].attributes.url}`} alt="" />
          </div>
        </div>

        <div className="desc_container">
          <h2>{data.attributes.title}</h2>
          <h3> &#8377; {data.attributes.price} </h3>
          <p> {data.attributes.description} </p>
          <hr />

          <div className="offers_container">
            <p> <span> <VerifiedOutlinedIcon /> </span> <span>Offers</span> </p>
            <p>
              <span>Parter Offers</span>
              <span>Get GST invoice and save up to 28% on business purchases.</span>
              <span>+2 more offers.</span>
            </p>
          </div>

          <hr />

          <div className="size_color">
            <p>
              <label htmlFor="">Size: </label>
              <select name="size" id="" value={size} onChange={handleSize}>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </p>

            <p>
              <label htmlFor="">Color: </label>
              <select name="color" id="" value={color} onChange={handleColor}>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
                <option value="Olive Green">Olive Green</option>
                <option value="Orange Red">Orange Red</option>
              </select>
            </p>
          </div>

          <div className="quantity_container">
            <span onClick={() => handleQuantity("dec")}>-</span>
            <span>{quantity}</span>
            <span onClick={() => handleQuantity("inc")}>+</span>
          </div>

          <div className="cart_btn" onClick={addToCart}>
            <p>
              <AddShoppingCartOutlinedIcon />
              <span className="cart_txt">Add to cart</span>
            </p>
          </div>

          <div className="utils_container">
            <span > <span onClick={handleWishList}> <FavoriteIcon className={`favIcon ${fav.isFav ? "hasFav" : ""}`} /> {fav.favText} </span> </span>
            <span> <BalanceOutlinedIcon /> Add to compare </span>
          </div>

          <hr />

          <div className="product_info">
            <p className="header" onClick={handleShowHide}>DESCRIPTION</p>
            <div className="description ">
              <p> <span>Brand</span> <span>XYXX</span> </p>
              <p> <span>Color</span> <span>Red</span> </p>
              <p> <span>Fit Type</span> <span>Regular Fit</span> </p>
              <p> <span>Neck Style</span> <span>Collared Neck</span> </p>
              <p> <span>Age Range</span> <span>Adult</span> </p>
            </div>

            <p className="header" onClick={handleShowHide}>ABOUT THIS ITEM</p>
            <ul className="about_product">
              <li>Care Instructions: Machine Wash</li>
              <li>Fit Type: Regular Fit</li>
              <li>Ultra-soft - Our Nova collection is made from super combed cotton that's breathable and utterly smooth at the same time. It feels super-soft and gentle against the skin.</li>
              <li>Ultra-breathable - The super combed cotton fabric is moisture absorbing for a breathable feel all day.</li>
              <li>IntelliEaze - It’s enhanced with IntelliEaze technology for the most luxurious comfort that guarantees unmatched lightness, softness and breathability.</li>
              <li>Classic silhouette -The cotton pique fabric adds an element of textural play, while the ribbed collar coupled with the two-button placket gives a smart sign-off to this classic silhouette.</li>
              <li>Day to night - With Nova, the traditional polo makes a stylish comeback making it ideal for an effortless day to night look.</li>
            </ul>

            <p className="header" onClick={handleShowHide}>FAQ</p>
            <ul className="faq">
              <li>
                <p>What is the Country of Orgin of this Product?</p>
                <p>India.</p>
              </li>
              <li>
                <p>Which type of material is used for this Product?</p>
                <p>It is made of 100% Cotton fabric.</p>
              </li>
              <li>
                <p>What is the Average rating of this Product?</p>
                <p>It has an average rating of 4.5 stars.</p>
              </li>

            </ul>

          </div>

          <hr />

          <div className="similar_item">
            <p>Similar items to consider</p>
            <Link to={`/product/${randomProduct}`} className="similar_item_link">
              <div className="similar_product">
                <img src={`${simItem.img}`} alt="" />
                <p>
                  <span>{simItem.title}</span>
                  <span>{simItem.rating} stars (35) </span>
                  <span>&#8377; {simItem.price}</span>
                </p>
              </div>

            </Link>
          </div>

          <hr />

          <div className="info_container">
            <p>Vendor: Polo</p>
            <p>Product Type: T-shirt</p>
            <p>Tag: T-shirt, Men, shirts</p>
          </div>

          <hr />

          <div className="brand_info">
            <p> <span>Top Brand</span> <span>XYXX</span> </p>
            <p> <span> <CheckCircleOutlinedIcon /> </span> <span>85% positive ratings from 50K+ customers</span> </p>
            <p> <span> <CheckCircleOutlinedIcon /> </span> <span>50K+ recent orders from this brand</span> </p>
            <p> <span> <CheckCircleOutlinedIcon /> </span> <span>6+ years on PrimeCart</span> </p>
          </div>

          <hr />

          <div className="max_quantity">
            <p>The maximum order quantity for this product is limited to 5 units per customer.</p>
            <p>Please note that orders which exceed the quantity limit will be auto-canceled. This is applicable across sellers.</p>
          </div>

        </div>

      </div>}
      {/* Product {productId}  */}
    </div>
  )
}

export default Product