import { useEffect } from "react";
import {onAuthStateChanged} from "firebase/auth";
import { auth } from "./FibaseConfig/Config";
import { useDispatch,useSelector } from "react-redux";
import {login,logout,selectUser} from "./app/Features/UserSlice";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import  UserScreen from "./FrontUI/FrontUI/UserScreen";  //Components here
import Profile from "./Pages/Profile/Profile";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import Search from "./Pages/Search/Search";
import MyList from "./Pages/MyList/MyList";
import Categories from "./Pages/Categories/Categories";
import PlaySection from "./Pages/PlaySection/PlaySection";
import WrongRoute from "./Pages/WrongRoute/WrongRoute";
import "./App.css";


function App() {
  const user=useSelector(selectUser);
  const dipactch=useDispatch();
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(userAuth)=>{
      if(userAuth){
        console.log(userAuth);
        dipactch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }))
      }else{
        // logedout
        dipactch(logout());
      }
    })
    return unsubscribe;
  },[dipactch])
  return (
    <div className="app">
      <Router>

         {
      !user ? (
        <UserScreen/>
        ):(
        <Routes>
          
          <Route  path="/" element={<HomeScreen/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/Search" element={<Search/>}/>
          <Route path="/Categories/:id/:name" element={<Categories/>}/>
          <Route path="/play" element={<PlaySection/>}/>
          <Route path="/myList" element={<MyList/>}/>
          <Route path="*" element={<WrongRoute/>}/>
          
          
        </Routes>
        
      )
     } 
      </Router>
    
    </div>
  );
}

export default App;
