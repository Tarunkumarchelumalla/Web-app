import firebase from  'firebase/compat/app'
import 'firebase/compat/auth'
import {getFirestore,collection} from "@firebase/firestore";
import { getDatabase,ref, onValue,set } from "firebase/database";




const app = firebase.initializeApp({
    apiKey: "AIzaSyAlc9GrpwT2F70xNlSpHm9CWiHGO2JNDVQ",
    authDomain: "greenify-13813.firebaseapp.com",
    databaseURL: "https://greenify-13813-default-rtdb.firebaseio.com",
    projectId: "greenify-13813",
    storageBucket: "greenify-13813.appspot.com",
    messagingSenderId: "577728472320",
    appId: "1:577728472320:web:c26edddf54debd99227fe5",
    measurementId: "G-MDRGR29C1N"
})
export const collection1 =collection;
export const db=getFirestore(app);
export const firebasedata= getDatabase();
export const ref2=ref;
export const onValue1=onValue;
export const set1=set;
export const auth = app.auth()

