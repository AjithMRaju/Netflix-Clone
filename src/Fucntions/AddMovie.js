import {collection,addDoc,deleteDoc,doc} from "firebase/firestore";
import { db } from "../FibaseConfig/Config";

export const userCollectionRef=collection(db,"cenima");


// MOVIE ADDING TO FIRBASE CLOUD STORE FUNCTION
export const addMovie= async (item) =>{
    await addDoc(userCollectionRef,{movies:item})
    console.log("Adding item to firbase")
  }


// MOVIE DELETING FROM FIRBASE CLOUDE STORE FUNCTION
export const deletMovie = async (id) =>{
  const movieDoc=doc(db,"cenima",id );
  await deleteDoc(movieDoc);
  console.log("removing item on prcess..")
}