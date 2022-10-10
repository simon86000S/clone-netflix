import React,{useState,useEffect} from "react";
import "../../components/Banner/Banner.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import requests from '../request';
import axios from "../axios";

const Banner = () => {
const [movie, setMovie] = useState([])

useEffect(() => {
  async function fetchData(){
    const request = await axios.get(requests.fetchNetflixOriginals)
   
    setMovie(request.data.results
      
      [
        Math.floor(Math.random()*request.data.results.length - 1)
      ]);
     
      return request;
      
    }
      
fetchData();

}, [])
console.log(movie)


  function truncate(string ,n){
return string?.length>n ? string.substr(0,n-1)+'......':string

}
  
  return (
    <div
      className="banner"
      style={{
        
        backgroundSize: "cover",
        backgroundImage: `url("https://images.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundColor:"black"
      }}
    >
       
      <div className="banner-content">
        <h1 className="banner__title"> {movie?.title || movie?.name ||movie.original_name}</h1>
         <div className="banner_desc">
        <h1 className="banner_desc_text">
         {truncate(movie?.overview,150)}
        </h1>
  

      </div>
        <div className="banner__buttons">
        <button className="banner__button"><PlayArrowIcon style={{paddingRight:'5px',height:"100px",width:'40px'}}/>Lecture</button>
          <button className="banner__button"><InfoIcon style={{paddingRight:'5px',height:"100px",width:'40px'}}/>Plus d'Infos</button>
        </div>
    
       
        
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
         ;
};
export default Banner;
