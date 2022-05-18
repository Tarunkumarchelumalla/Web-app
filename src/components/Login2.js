import React,{useRef, useState}from "react";
import "./login.css";
import {Alert} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAuth} from "./contexts/AuthContext";
import {Link,useNavigate} from "react-router-dom";
import { FaFacebook,FaTwitter,FaGoogle,FaLinkedinIn } from 'react-icons/fa';

import {db} from "./firebase"
import {collection,addDoc,getDocs,where,query} from "@firebase/firestore";

function Login2 (){

    const mystyle = {
        paddingleft:"2.5rem", 

        paddingright: "2.5rem"
      };
      // const emailRef=useRef();
      const passwordRef=useRef();
      // const nameRef=useRef();
      let docid;
      const LeadRef= collection(db,"Leaddata");
      const {signup,currentuser,set,database,ref} = useAuth();
      const [error ,setError]=useState("");
      const [id ,setId]=useState([]);
      const [name ,setName]=useState("");
      const [email ,setEmail]=useState("");
      const [Loading,setLoading]=useState(false);
      const [user, setUser] = useState();
      // const user=currentuser.uid;
      const handlechange=(e)=>{
        setName(e.target.value);
        
      }
      const handlechange2=(e)=>{
     
        setEmail(e.target.value);
      }

      const history=useNavigate();
 
   async function handlesubmit(e){
     
      e.preventDefault();
     try{
       setError("");
       setLoading(true);
   
       await signup(email,passwordRef.current.value);
       console.log("yes");
       setLoading(false);
     
    //  console.log(name);
    console.log(currentuser.uid)
  
    set(ref(database,currentuser.uid), {
      username:name,
      score:1
    });
history("/");
     }
     catch{
       setError("failed to create an account");
       console.log(error);
     }
  
    }
    function login(){
      history("/Login1");
    }

    return(<>
       <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <h2></h2>
        <form method="POST">
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Signup with</p>
            {error&& <Alert variant="danger">{"server error try again"}</Alert>}
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-facebook-f"><FaFacebook/></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-twitter"> <FaTwitter/></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-linkedin-in"> <FaLinkedinIn/></i>
            </button>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

      
          <div className="form-outline mb-4">
            <input type="email" id="form3Example3" onChange={handlechange2} value={email}className="form-control form-control-lg"
              placeholder="Enter a valid email address" required/>
            <label className="form-label" >Email address</label>
          </div>
          <div className="form-outline mb-4">
            <input type="text" id="form3Example34" onChange={handlechange} value={name}
            className="form-control form-control-lg"
          required/>
            <label className="form-label" >User name</label>
          </div>

    
          <div className="form-outline mb-3">
            <input type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" ref ={passwordRef} required />
            <label className="form-label" >Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
     
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" >
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button  type="submit" disabled={Loading} className="btn btn-primary btn-lg" onClick={ handlesubmit}
          
              style={{mystyle }} >Signup</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a 
                onClick={login} className="link-danger">Login??</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div
    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
  

 
    <div>
      <a href="#!" className="text-white me-4">
        <i ><FaFacebook/></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i><FaGoogle/></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i ><FaLinkedinIn/></i>
      </a>
      <a href="#!" className="text-white">
        <i><FaTwitter/></i>
      </a>
    </div>

  </div>
  </section>
</>
    );
}

export default Login2;