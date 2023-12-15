import React, { useState } from 'react';
import "./LogIn.css";
import userApi from '../../api/modules/user.api';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/slices/UserSlice';
import { deleteMsg, msgDetails } from '../../store/slices/MsgSlice';

const LogIn = () => {

  const [cred, setCred] = useState({ username: "", password: "", })
  let dispatch = useDispatch();

  const handleOnChange = (e) => {
    let { name, value } = e.target
    setCred((prevVal) => {
      return {
        ...prevVal,
        [name]: value
      }
    })
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    let user = {
      identifier: cred.username,
      password: cred.password
    }

    let newUser = await userApi.loginuser(user);
    if (newUser.user) {
      localStorage.setItem("user_token", newUser.jwt);
      dispatch(addUser(newUser.user));
      dispatch(msgDetails({ msgType: "success", msgContent: "Logged In successfully!" }))
      setTimeout(() => dispatch(deleteMsg()), 3000);
    } else {
      dispatch(msgDetails({ msgType: "failed", msgContent: "Some Error Occured!" }))
      setTimeout(() => dispatch(deleteMsg()), 3000);
    }
  }

  return (
    <div className="login_wrapper">
      <form action="" method="post">
        <p className="username"> <label htmlFor="">Username/Email</label> <input onChange={handleOnChange} type="text" name="username" value={cred.username} autoComplete='true' /> </p>
        <p className="password"> <label htmlFor="">Password</label> <input onChange={handleOnChange} type="password" name="password" value={cred.password} autoComplete='true' /> </p>
        <button disabled={cred.username.length < 3 || cred.password.length <= 4} className="login_btn" onClick={handleSignUp}>Log In</button>
      </form>
    </div>
  )
}

export default LogIn