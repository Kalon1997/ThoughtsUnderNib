import React, { useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { resetPasswordAction } from "../../actions/action";
const ForgotPassword = () => {
  const params = useParams();
  const errorMsg = useSelector((state) => (state.myweb.error))

  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch()

  const resetHandler = async (e) => {  
    e.preventDefault();
    dispatch(resetPasswordAction(password, params.token));
  }

    return (
     
    <form className="mt-5 pt-5 mx-auto bg-light w-50 px-3 py-3">
            <h3 className=" mx-auto bg-light text-primary">Login</h3>
          
            <div class="form-group py-3">
          <label for="exampleInputPassword1">Password</label>
          <input value={password} onChange={e => {setPassword(e.target.value)}} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        
        <button onClick={resetHandler} type="submit" class="btn btn-dark mx-auto px-5 align-content-center"> Reset Password </button>
        
        { errorMsg ? <p className="text-danger">{errorMsg}</p> : null }
    </form> 
   
    )
}

export default ForgotPassword;