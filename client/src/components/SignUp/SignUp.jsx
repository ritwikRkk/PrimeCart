import React, { useState } from 'react';
import "./SignUp.css";
import userApi from '../../api/modules/user.api';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/slices/UserSlice';
import { deleteMsg, msgDetails } from '../../store/slices/MsgSlice';

const SignUp = () => {

  const [cred, setCred] = useState({ username: "", email: "", password: "", cpassword: "" })
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
      username: cred.username,
      email: cred.email,
      password: cred.password
    }
    
    let newUser = await userApi.createuser(user);
    if (newUser.user) {
      localStorage.setItem("user_token", newUser.jwt);
      dispatch(addUser(newUser.user));
      dispatch(msgDetails({ msgType: "success", msgContent: "Account created successfully!" }))
      setTimeout(() => dispatch(deleteMsg()), 3000);
    } else {
      dispatch(msgDetails({ msgType: "failed", msgContent: "Some Error Occured!" }))
      setTimeout(() => dispatch(deleteMsg()), 3000);
    }
    // console.log(newUser);
  }

  return (
    <div className="signup_wrapper">
      <form action="" method="post">
        <p className="username"> <label htmlFor="">Username</label> <input onChange={handleOnChange} type="text" name="username" value={cred.username} autoComplete='true' /> </p>
        <p className="email"> <label htmlFor="">Email</label> <input onChange={handleOnChange} type="email" name="email" value={cred.email} autoComplete='true' /> </p>
        <p className="password"> <label htmlFor="">Password</label> <input onChange={handleOnChange} type="password" name="password" value={cred.password} autoComplete='true' /> </p>
        <p className="cpassword"> <label htmlFor="">Confirm Password</label> <input onChange={handleOnChange} type="password" name="cpassword" value={cred.cpassword} autoComplete='true' /> </p>
        <button disabled={cred.username.length < 3 || cred.password.length <= 5 || cred.password !== cred.cpassword} className="signup_btn" onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp