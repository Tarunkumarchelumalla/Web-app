import React, { useContext ,useState,useEffect} from 'react'
import {auth,firebasedata,ref2,onValue1,set1} from "../firebase"





const AuthContext= React.createContext()

export  function useAuth() {
  return useContext(AuthContext)

   
}


export function AuthProvider({children}){

    auth.onAuthStateChanged(function(user){
        // if (user) {
        //     document.getElementById("login").innerHTML="Logout";
     
        // } else {

          
        // }
      });

    const[currentuser,setCurrentUser] = useState()
    const[username,setUsername] = useState()
  const database=firebasedata
  
  const ref=ref2;
  const onValue=onValue1;
  const set=set1;
  var LeadData
    const[loading ,setLoading] = useState(true)
    const reference= ref(database,LeadData);
    onValue(reference, (snapshot) => {
        const data = snapshot.val();
          
        //    console.log(currentuser.uid)
        //    setUsername(data.username)
    
       });
    function signout(){
       return auth.signOut();
    }
    function signup(email,password){
        auth.createUserWithEmailAndPassword(email,password)
    }
    function Login(email,password){
        auth.signInWithEmailAndPassword(email,password)
        
    }
    function profile(){
        const starCountRef = ref(database,LeadData);
        onValue(starCountRef, (snapshot) => {
           const data = snapshot.val();
             
              console.log(data.username)
              console.log(data.email)
              setUsername(data.username)
       
          });
    }
    function data(){
        const reference= ref(database,LeadData);
        onValue(reference, (snapshot) => {
            const data = snapshot.val();
              
               console.log(data)
            //    setUsername(data.username)
        
           });
    }
    useEffect(()=>{
       const unsubscribe= auth.onAuthStateChanged(user=>{
        
            setCurrentUser(user)
       
        setLoading(false)
        
        })
        return unsubscribe
    }, [])

const value ={
    currentuser,
    database,
    username,
    ref,
    onValue,
    set,
    signup,
    signout,
    profile,
    Login,
    data
}
return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
)
}