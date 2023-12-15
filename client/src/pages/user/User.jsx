import React, { useState } from 'react';
import "./User.css";
import SignUp from '../../components/SignUp/SignUp';
import LogIn from '../../components/LogIn/LogIn';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../store/slices/UserSlice';
import { clearCart } from '../../store/slices/CartSlice';
import { clearWishList } from '../../store/slices/WishList';
import { deleteMsg, msgDetails } from '../../store/slices/MsgSlice';

const User = () => {

  const [login, setLogin] = useState(true);
  const [userToken, setUserToken] = useState(false);
  const isUser = useSelector(state => state.user)
  const dispatch = useDispatch();

  useEffect(() => {
    let user_Token = localStorage.getItem("user_token");
    if (user_Token) {
      setUserToken(true);
    } else {
      setUserToken(false);
    }
    // console.log(user_Token);
    // console.log(userToken);
    // eslint-disable-next-line

  }, [isUser])

  const handleLogOut = () => {
    dispatch(deleteUser());
    dispatch(clearCart());
    dispatch(clearWishList());
    localStorage.removeItem("user_token");

    dispatch(msgDetails({ msgType: "success", msgContent: "successfully, Logged Out!" }))
    setTimeout(() => dispatch(deleteMsg()), 3000);
  }

  return (
    <div className="user_container">
      {!userToken && <div className="user_wrapper">
        {!login && <div className="signup_container">
          <SignUp />
          <p className="login_route"> <span>Already have an account?</span> <span onClick={() => setLogin(true)}>Log In</span> </p>
        </div>}

        {login && <div className="login_container">
          <LogIn />
          <p className="signup_route"> <span>Don't have an account?</span> <span onClick={() => setLogin(false)}>SignUp</span> </p>
        </div>}
      </div>}

      {userToken &&
        <div className="profile_info">
          <fieldset>
            <legend>User Details</legend>
            <p> <label htmlFor="">Username:</label> <span>{isUser.userInfo.username}</span> </p>
            <p> <label htmlFor="">Email:</label> <span>{isUser.userInfo.email}</span> </p>
            <button className="logout_btn" onClick={handleLogOut}>Logout</button>
          </fieldset>
        </div>
      }
    </div>
  )
}

export default User