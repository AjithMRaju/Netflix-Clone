import React, { Fragment } from 'react';
import NavBar from "../NavBar/NavBar"
import Banner from "../Banner/Banner"
import Requsets from "../../Helpres/Requests"
import RowPost from "../../Pages/Row/RowPost"
import Requests from '../../Helpres/Requests';


const HomeScreen = () => {
  return (

    <div>
        <NavBar/>
        <Banner Fetch_URL={Requests.fetchNetflixOriginals}/>
        <RowPost title={"Trndings"} fetch_Url={Requsets.fetchTrending} isLarge/>
        <RowPost title={"ActionMovies"} fetch_Url={Requsets.fetchActionMovies} />
        <RowPost title={"Thriller"} fetch_Url={Requsets.fetchThriller} />
        <RowPost title={"Netflix Originals"} fetch_Url={Requsets.fetchNetflixOriginals} />
        <RowPost title={"Comedy"} fetch_Url={Requsets.fetchComedyMovies} />
        <RowPost title={"SCI-FI"} fetch_Url={Requsets.fetchSCI_FIMovies} />
        <RowPost title={"Top Rated"} fetch_Url={Requsets.fetchTopRated} />
        <RowPost title={"Up Coming"} fetch_Url={Requsets.fetchUpcomingMovie} />
        <RowPost title={"Horrer"} fetch_Url={Requsets.fetchHorrorMovies} />
    </div>
  )
}

export default HomeScreen