import React , {useState} from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css';
import './NavCss/Card.css'
import Login from './Login';
import { useNavigate,Link } from 'react-router-dom' 
import { useAuth } from './contexts/AuthContext';
import { FaLeaf,FaUserAlt } from 'react-icons/fa';
import "./NavCss/newnav.css"
import { getAuth, signOut } from "firebase/auth";


export default function Navbar(props) {

 
  const about2 = useNavigate()
  //console.log(showModel)
  const history=useNavigate();
  function handlelogin(e){
   
    const auth = getAuth();
    signOut(auth).then(() => {
      alert("you are signed out");
    }).catch((error) => {
      // An error happened.
    });
 
  
    history(`/login1`)

  }


  return (
    <>


    <div className='row Nav-bar bg78'>
        <div className='col-sm-4 '>
         <ul>
         <li className='logo list'> <FaLeaf size='30px'/><span>green</span> <span className='imp'>Leaf</span></li>
         </ul>
        </div>
<div className='col-sm-4 navbar-items'>
         <ul className='nav-tags'>    
         <li onClick={() => history(`/`)}> Home</li>

  <li onClick={() => history(`/about`)} style={{cursor:"pointer"}}> About Us</li>
  <li onClick={() => history(`/leaderboard`)}>Leaderboard</li>
</ul>
</div>
<div className='col-sm-4 navbar-items '>
<ul className='nav-tags'>  
<li id="login"onClick={handlelogin}> Login</li>
</ul>
</div>


    </div>

    </>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}







