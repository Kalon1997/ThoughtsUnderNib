import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { loginAction } from "../../actions/action";
const Login = () => {
  const errorMsg = useSelector((state) => (state.myweb.error))
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const loginHandler = async (e) => {  
    e.preventDefault();
    dispatch(loginAction(email, password));
  }

    return (
     
    <form className="mt-5 pt-5 mx-auto bg-light w-50 px-3 py-3">
            <h3 className=" mx-auto bg-light text-primary">Login</h3>
          
        <div class="form-group py-3">
          <label for="exampleInputEmail1">Email address</label>
          <input value={email} onChange={e => {setEmail(e.target.value)}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group py-3">
          <label for="exampleInputPassword1">Password</label>
          <input value={password} onChange={e => {setPassword(e.target.value)}} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div class="form-group form-check py-3">
        <p>Don't remember your password ! <a href='/forgotPassword' class=" mx-auto px-5 align-content-center">Forgot password? </a></p>
         
        </div>
        <button onClick={loginHandler} type="submit" class="btn btn-dark mx-auto px-5 align-content-center">Login</button>
        <p>Don't have an account?<a href='/register' class=" mx-auto px-5 align-content-center">Register</a></p>
        { errorMsg ? <p className="text-danger">{errorMsg}</p> : null }
    </form> 
   
    )
}

export default Login;