import { HashRouter as Router, Routes, Route, HashRouter, } from "react-router-dom";


//import './App.css';

import Navbar from './components/Navbar';
//import Login from './components/Login';
//import Slider from './components/Slider';
import HelpBox from './components/HelpBox';
import Card from './components/Card';
import OtherSlider from './components/NavCss/OtherSlider';
import VideoLink from "./components/VideoLink";


//import { CardData } from './components/CardData'


//import ImageSlider from './components/ImageSlider';
//import { SliderData } from './components/SliderData';
import './components/LoginCss.css';
import './components/NavCss/HelpBox.css';
import './components/FAQFolder/FaqCss.css'


import './components/NavCss/CardDes.css';
import CardDes from "./components/CardDes";
import "./components/NavCss/VideoL.css";
import FooterAbout from "./components/FooterAbout";
import FooterInfo from "./components/FooterStuff/FooterInfo";
import "./components/FooterStuff/FooterInf.css"
import FaqList from "./components/FAQFolder/FaqList";
import RandomImg from "./components/RandomImg";
import './components/RandomImg.css'
import Leaderboard from "./components/Leaderboard";
import './Leaderboard.css'
// import Login from "./components/Login"
import Login1 from "./components/Login1";
import Login2 from "./components/Login2";
import {AuthProvider} from "./components/contexts/AuthContext";


function App() {
  return (

    <>
    
        <Router>
        <AuthProvider>    
           <Navbar /> 
          <Routes>
            <Route exact path="/" element={<><OtherSlider /><br /><br /><HelpBox /><Card /><br /><VideoLink /><br /><br /><br /><br /><RandomImg/> <FooterAbout /> <br/> </>} />
            <Route exact path="/card/:id" element={<CardDes />} />
            <Route exact path="/about" element={<FooterInfo />} />
            <Route exact path="/faq" element={<FaqList />} />
            <Route exact path="/login1" element={<Login1/>}/>
           <Route exact path="/login2" element={<Login2/>}/>
            <Route exact path="/leaderboard" element={<Leaderboard />} />
         
            {/* <Route exact path="/login" element={<Login/>} /> */}

          </Routes>
          </AuthProvider>
        </Router>
     

    </>

  );
}



export default App;
