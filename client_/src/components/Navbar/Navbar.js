import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { FiLogIn } from 'react-icons/fi';
import { CgProfile} from 'react-icons/cg';
import { BsFillPencilFill, BsSearch, BsSignpostSplitFill} from 'react-icons/bs';
import { logoutAction } from '../../actions/action';
import { Link, useHistory } from "react-router-dom";

const Navbar = (props) => {
  const dispatch = useDispatch()
  const history = useHistory();
 
  const [isActive, setActive] = useState([window.location.pathname])

    useEffect(() => {
    return history.listen(location => {
      if (history.action === 'PUSH') {
        console.log("location.key "+location.pathname)
        setActive([location.pathname])
      }
  
      if (history.action === 'POP') {
        setActive((paths) => [...paths, location.pathname ])
        console.log("location.pathname "+location.pathname)
        console.log("isActive "+isActive)
        if (isActive[1] === location.key) {
         
        }
         else {
          setActive((paths) => [ location.pathname, ...paths ])
          console.log("isActive "+isActive)

  
        }
      }
    })
  }, [ isActive ])

    const {loggedInUser} = useSelector((state) => (state.myweb))
    const logoutHandler = (e) => {
      dispatch(logoutAction())
    }


    return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-5">
  <div class="container-fluid">
    <Link className="px-5 navbar-brand" to="/">T h o u g h t s_under_N i b</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link className="nav-link text-white" aria-current="page" onClick={(e)=>{setActive('/feed')}} to="/feed">
            {isActive[0]==='/feed' ? <u><b><BsSignpostSplitFill /> Feed</b></u> :  <><BsSignpostSplitFill /> Feed</> }
          </Link>
        </li>
        

        <li class="nav-item">
        <Link className="nav-link text-white" aria-current="page" onClick={(e)=>{setActive('/search')}} to="/search">
            {isActive[0]==='/search' ? <u><b><BsSearch /> Search</b></u> :  <><BsSearch /> Search</> }
          </Link>
        </li>
       

        { props?.isAuth &&  <li class="nav-item">
         <Link className="nav-link text-white" aria-current="page" onClick={(e)=>{setActive('/poemform')}} to="/poemform">
            {isActive[0]==='/poemform' ? <u><b><BsFillPencilFill /> Compose</b></u> :  <><BsFillPencilFill />Compose</> }
          </Link>
        </li> }

        
       
      </ul>
    { !props?.isAuth ? <a href='/login' class="btn btn-primary bg-light text-dark"><FiLogIn></FiLogIn> Login</a> : <ul className="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item">
         <Link className="nav-link mx-4 text-white" aria-current="page" onClick={(e)=>{setActive('/me')}} to="/me">
            {isActive[0]==='/me' ? <u><b><CgProfile /> {loggedInUser}</b></u> :  <> <CgProfile />{loggedInUser}</> }
          </Link>
        </li> <li className="nav-item"><button onClick={logoutHandler} className='btn btn-dark'>Logout</button> </li></ul>}
    </div>
  </div>
</nav>

    )
}
export default Navbar;
