import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import { API_KEY } from "../../Helpres/Requests";
import NavBar from '../../Components/NavBar/NavBar';
import Cards from '../Cards/Cards';
import axios from "../../Helpres/Axios"
import "./Categories.css";

const Categories = () => {


    
    
    const [severalMovies,setSeveralMovies]=useState([]);
    
    const {id,name}=useParams()
    useEffect(()=>{
        const genrMovies=async ()=>{
            const response=await axios.get(`/discover/movie?api_key=${API_KEY}&with_genres=${id}`);
            console.log(response.data.results);
            setSeveralMovies(response.data.results);
        }
        genrMovies();
    },[id,name])



  return (
    <div>
      <NavBar/>
      <div className='pt-5'>
      
        {
        severalMovies ? (<Cards searchMovie={severalMovies} name={name}/>) : (<p>Loading..</p>)
      }
      </div>
      
      
    </div>
  )
}

export default Categories
