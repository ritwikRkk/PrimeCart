import React, { useState, useRef, useEffect } from 'react';
import "./card.css";
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import { addWishListItem, deleteWishListItem } from '../../store/slices/WishList';
import { useSelector } from 'react-redux';
import wishlistApi from '../../api/modules/wishlist.api';
import { deleteMsg, msgDetails } from '../../store/slices/MsgSlice';


const Card = ({ item, id }) => {
    const [img, setImg] = useState(0);
    const [isFav, setIsFav] = useState(false);
    const [favId, setFavId] = useState(null);
    let imgRef = useRef();
    const dispatch = useDispatch();
    const wishListArr = useSelector(state => state.wishList.wishListArr);
    const user = useSelector(state => state.user);

    const hoverImg = (e) => {
        // resetImg();
        let imgArr = item.images.data.length;
        // console.log(item.images.data);
        // console.log("mouseEnter");
        imgRef.current = setInterval(() => {
            setImg((prevVal) => {
                if (prevVal >= imgArr - 1) {
                    return 0;
                } else {
                    return prevVal + 1;
                }
            })
        }, 1000);
        // e.target.parentNode.style.animation = "fade 1s ease-in-out 1s infinite normal";
        e.target.parentNode.classList.add("animate");
    }
    const resetImg = (e) => {
        // console.log("mouseOut");
        setImg(0);
        clearInterval(imgRef.current);
        // e.target.parentNode.style.animation = "unset";
        e.target.parentNode.classList.remove("animate");
    }

    useEffect(() => {
        let hasItem = wishListArr.filter(element => element.productId === id);
        //   console.log(hasItem);
        if (hasItem.length > 0) {
            setIsFav(true);
            // console.log(hasItem);
            setFavId(hasItem[0].id)
        } else {
            setIsFav(false);
            setFavId(null)
        }
        // eslint-disable-next-line
    }, [wishListArr])

    const handleWishList = async (e) => {
        e.preventDefault();
        if (!user.isLoading) {
            //IF USER IS LOGGED IN ADD PRODUCT TO WISH LIST
            // console.log(user);
            let favItem = {
                // uId: item.id,
                productId: id,
                title: item.title,
                price: item.price,
                // size: item.size ? item.size : null,
                // color: item.color ? item.color : null,
                img: item.images.data[0].attributes.url,
                user: user.userInfo.id
            }

            if (isFav) {
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

    // const imgBaseUrl = "http://localhost:1337";

    return (
        <Link className="link" to={`/product/${id}`}>
            <div className='card'>
                <div className="image" >
                    {item.isNew && <span className="newSeason" > New Season </span>}
                    <img src={`${item.images.data[img].attributes.url}`} alt="" className="mainImg" onMouseEnter={hoverImg} onMouseLeave={resetImg} />
                    {/* <img src={item.img2} alt="" className="secondImg" /> */}
                    <span className={`fav_icon ${isFav ? "isFav" : ""}`} onClick={handleWishList}> <FavoriteIcon /> </span>
                </div>
                <h2> {item.title} </h2>
                <div className="prices">
                    <h3 className="oldPrice"> &#8377;{item.oldPrice} </h3>
                    <h3> &#8377;{item.price} </h3>
                </div>
            </div>

        </Link>
    )
}

export default Card