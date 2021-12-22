import './App.css';
import React,{useEffect} from "react";
import HomePage from "./pages/HomePage"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import {auth} from "./firebase"
import {useDispatch,useSelector} from "react-redux"
import {login,logout,selectUser} from "./features/userSlice"

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{
    const unsubsribe=auth.onAuthStateChanged(auth.getAuth(),(userAuth)=>{
      if (userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }))

      }else{
        dispatch(logout)
      }
    })
    return unsubsribe
  },[]);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginPage/>
        ) : (
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
