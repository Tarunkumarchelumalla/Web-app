import React from 'react'
import { CardData } from './CardData'
import './NavCss/Card.css'
import { useNavigate } from 'react-router-dom' 
import {useAuth} from "./contexts/AuthContext";

function Card() {

    const card1 = useNavigate()
    const {currentuser,set,database,ref}= useAuth();
    function handlesubmit(){
   
       if(currentuser){
        set(ref(database,currentuser.uid), {
            score:100
          });
          console.log("its done");
       }
       else{
         console.log("did some shitt");
         card1('/login1');
       }
      
    }
    return (

        <>
        <h3 className='h3text' id='plants'>Our products</h3>
        {/* <h3 className='h3text' onClick={() => card1("/card",{state:"hello"})}>Value For Money....</h3> */}
        <br />
        
            {/* Calling carddata using map */}
            {CardData.map(({ img, title, description, price,id }) => (
                
                <div className='wrapper'>
                   {/* Card component with img and other details*/}
                    
                     <div onClick={() => card1(`/card/${id}`,{state:{img,title,description,price}})} className='card'>
                     {/* <div onClick={} className='card'> */}
                        <img src={img} className='card_img' />
                        <div className='card_body'>
                            <h2 className='card_title'>{title}</h2>
                            <p className='card_description'>{description}</p>
        
       
                            <h3 className='card_price'>{price}</h3>
                            <button onClick={handlesubmit} type='submit' className='card_btn'>Add to Cart</button>
                        </div>

                    </div>
         
                </div>
            )
            )


            }

        </>

    )
}


export default Card