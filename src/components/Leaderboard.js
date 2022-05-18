import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Ldata } from './LeaderboardData'
import {useAuth} from "./contexts/AuthContext";
import { onChildAdded,orderByChild } from 'firebase/database';
import {db} from "./firebase"
import {collection,getDocs,query,where,orderBy} from "@firebase/firestore";
function Leaderboard() {
    var data=0;
    const lead = useNavigate()
    const [scores,setScores]=useState([]);
    const[input,setInput]=useState("");
    const {signup,currentuser,set,database,ref} = useAuth();

   
    // const starCountRef = ref(database,);
    // onChildAdded(starCountRef, (snapshot) => {
    //    data = snapshot.val();
         
    //     console.log(data.score)
    //     // setInput(data.score);
    //     // setScores([...scores, data.score])
    //     // console.log(scores);
    // });
   var score=data.score;
   const userCollectionRef= query(collection(db,"Leaddata"),where("score",">",0),orderBy("score","desc"));
// const userCollectionRef=query(collection(db,"Leaddata"), orderByChild('score'));

   useEffect(()=>{
       const getdata = async()=>{
           const data1 =await getDocs(userCollectionRef);
           setScores(data1.docs.map((doc)=>({...doc.data(),id:doc.id})));
        console.log(data1.docs.map((doc)=>({...doc.data(),id:doc.id})))
        
       }
       getdata();
   },[]);

    return (
     
        <>
      
            <h1 className='test1'>LEADERBOARD</h1>

            {scores.map((Leaddata) => (

                
              <center>  <div className="card_container">
                    <img className="card_imag" src="https://i.imgur.com/3bEhMWX.png" alt="Avatar" />
                   
                    <p><span>{Leaddata.name}</span></p>
                    <p>Points:{Leaddata.score}</p>
                   <p>message: {Leaddata.message}</p>
                </div></center>


            )
            )
            }
        </>
    )
}

export default Leaderboard