 export const API_KEY="b902dbb65d4394f354de722c235ab4bb";
 export  const IMG_URL = "https://image.tmdb.org/t/p/original/";

export default {
    fetchTrending:`/trending/movie/day?api_key=${API_KEY}`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?with_genres=35&api_key=${API_KEY}`,
    fetchHorrorMovies:`/discover/movie?with_genres=27&api_key=${API_KEY}`,
    fetchSCI_FIMovies:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchThriller:`/discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchUpcomingMovie:`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    
}