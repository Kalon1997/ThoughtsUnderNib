import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { forgotPasswordAction } from "../../actions/action";
const ForgotPassword = () => {
  const errorMsg = useSelector((state) => (state.myweb.error))
  const [email, setEmail] = useState("");
  
  const dispatch = useDispatch()


  const resetHandler = async (e) => {  
    e.preventDefault();
    dispatch(forgotPasswordAction(email));
  }

    return (
     
    <form className="mt-5 pt-5 mx-auto bg-light w-50 px-3 py-3">
            <h3 className=" mx-auto bg-light text-primary">Login</h3>
          
        <div class="form-group py-3">
          <label for="exampleInputEmail1">Email address</label>
          <input value={email} onChange={e => {setEmail(e.target.value)}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        
        <button onClick={resetHandler} type="submit" class="btn btn-dark mx-auto px-5 align-content-center">Get reset password link in the given id  </button>
        
        <p>Don't have an account?<a href='/register' class=" mx-auto px-5 align-content-center">Register</a></p>
        { errorMsg ? <p className="text-danger">{errorMsg}</p> : null }
    </form> 
   
    )
}

export default ForgotPassword;