import './App.css';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Navbar from './components/Navbar/Navbar';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Content from './components/Content/Content';
import NotFound from './components/Content/NotFound';
import Footer from './components/Footer/Footer';
import Feed from './components/Feed/Feed'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PoemForm from './components/PoemForm/PoemForm';
import Me from './components/Me/Me';
import { loadUserAction } from './actions/action';
import Search from './components/Search/Search';
import ForgotPassword from './components/Login/ForgotPassword';
import ResetPassword from './components/Login/ResetPassword';
import Loader from './components/Loader/Loader';
function App() {
  const {isAuth} = useSelector((state) => (state.myweb))

  const l1 = useSelector((state) => (state.myweb.loading))
  const l2 = useSelector((state) => (state.myweb2.loading))
  var l;
  if(l1===true && l2===false)
  {
    l=true;
  }
  else if(l1===false && l2===true){
    l=true;
  }
  else{
    l=false;
  }

  const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(loadUserAction());
    },[])
  return (
    <BrowserRouter className="App">
    <Navbar isAuth={isAuth}/>
    {l && <Loader />}

          <Switch>
          <Route exact path='/'>
            <Content />
            <Footer />
          </Route>
  
          <Route exact path='/login'>
            <Login />
          </Route>
  
          <Route exact path='/register'>
            <Register />
          </Route>
  
          <Route exact path='/me'>
            <Me />
          </Route>
  
          <Route exact path='/feed'>
            <Feed />
          </Route>
  
          <Route exact path='/search'>
            <Search />
          </Route>
  
          <Route exact path='/poemform'>
            <PoemForm />
          </Route>
  
          <Route exact path='/forgotPassword'>
            <ForgotPassword />
          </Route>
  
          <Route exact path='/password/reset/:token'>
            <ResetPassword />
          </Route>
  
          <Route exact path='*'>
            <NotFound />
          </Route>
  
        </Switch>
          

    </BrowserRouter>
  );
}

export default App;
