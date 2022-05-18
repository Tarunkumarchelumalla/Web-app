import React, { useState } from 'react'
import { CardDescriptionData } from './CardDescriptionData'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {useAuth} from "./contexts/AuthContext";
import {db} from "./firebase"
import {collection,addDoc,query,where,getDocs,collectionGroup} from "@firebase/firestore";
import { update } from 'firebase/database';

function CardDes() {
  const[msg,setMsg]=useState("");
  const[pin,setPin]=useState("");
  const[num,setNum]=useState("");
  const[address,setAddress]=useState("");
  const handlemsg=(e)=>{
    setMsg(e.target.value);

  }
  const handlenum=(e)=>{
    setNum(e.target.value);

  }
  const handlepin=(e)=>{
    setPin(e.target.value);

  }
  const handleaddress=(e)=>{
    setAddress(e.target.value);
 
  }
 
  const {currentuser,set,database,ref,onValue,}= useAuth();
 
const history =useNavigate();
  const params = useParams()
  const element = CardDescriptionData.find((lel) => lel.id.toString() === params.id)
  var data;
  var username;
  //console.log(params)
  const LeadRef=collection(db,"Leaddata");
  function handlesubmit(){
  
    if(currentuser){
     const user=currentuser.uid
     const userdataRef= collection(db,"userdata");
      var value=0;
    const starCountRef = ref(database,user);
    onValue(starCountRef, (snapshot) => {
       const data = snapshot.val();
         console.log(currentuser.uid);
          console.log(data.score);
          console.log(data.username);
          username=data.username;
          value=data.score+element?.price/2
          console.log(value);

       
   
      });
      
   //user data retrivation
   update(ref(database,user), {
    username:username,
    score:value
  });
 
// firestore similar elements finding

//firestore push with validation
// console.log(data.username)
       addDoc(LeadRef,{
         name:username,
         score:value,
         user:user,
         message:msg
       })
      
       addDoc(userdataRef,{
         user:user,
        address:address,
        pin:pin
      })
  

       console.log("done dona done");
       alert("your payment is successfull")
    }
    else{
      console.log("did some error");
      history('/login1');
    }
 
 }
  return (

    <>

      <div className='allp' >
        <div className='product'>
          <div className='product_photo'>
            <div className='photo_container'>

              <div className='photo_main'>

                <img className="imgDesc" src={element?.img} alt="green" />

              </div>
            </div>
          </div>

          <div className='product_info'>
            <div className='title'>
              <h1>{element?.title}</h1>
            </div>
            <div className='price'>
            <span> ₹</span><span>{element?.price}</span>
            </div>
            <div className='description'>
              <h3 className='ch3'>ABOUT</h3>
              <ul>
                <li>{element?.b1}</li>
                <li>{element?.b2}</li>
                <li>{element?.b3}</li>
                <li>{element?.b4}</li>


              </ul>
            </div>
            <div className='msg'>
            <div>
               <label className='label'>Address :</label> 
               <input className="input1 input"type='text' placeholder='Enter the address' onChange={handleaddress} value={address}>
                </input>
                </div>
                <div>
                <label className='label'>Pincode :</label> 
                <input className="input input"type='text' onChange={handlepin} value={pin}placeholder='Enter the pincode'>
                </input>
                </div>
                <div>
                <label className='label'>Phone :</label> 
                <input className="input input"type='text' onChange={handlenum} value={num}placeholder='Enter the phone number'>
                </input>
                </div>
               <div>
                <label className='label'>Message :</label> 
                <input className="input2 input" type='text' placeholder='Enter the message' onChange={handlemsg} value={msg}>
                </input>
                </div>
            </div>
            <button className='buy_btn'onClick={handlesubmit}>Buy now</button>
            
          </div>

        </div>
      </div>



    </>
  )
}




export default CardDes

