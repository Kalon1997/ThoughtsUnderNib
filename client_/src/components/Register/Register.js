import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { registerAction } from "../../actions/action";
const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errMsg = useSelector((state) => (state.myweb.error))
  const history = useHistory();
  const dispatch = useDispatch();
  const registerHandler = async (e) => {
    
  e.preventDefault();
    await dispatch(registerAction(username, email, password));
    history.push("/login");
}

    return (
      
      <form className="mt-5 pt-5 mx-auto bg-light w-50 px-3 py-3">
            <h3 className=" mx-auto bg-light text-primary">Register here!</h3>

        <div class="form-group py-3">
        <label for="exampleInputEmail1">UserName</label>
        <input value={username} onChange={e => {setUsername(e.target.value)}} type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
        </div>

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
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Remember me</label>
        </div>

  <button onClick={registerHandler} type="submit" class="btn btn-dark mx-auto px-5 align-content-center">Register</button>
{ errMsg ? <p className="text-danger">{errMsg}</p> : null }
<p>Back to login? <a href='/login' class=" mx-auto px-5 align-content-center">Login</a></p>
</form> 
    )
}

export default Register;