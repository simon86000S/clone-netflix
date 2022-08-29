import React from "react";
import "../../components/Banner/Banner.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

const Banner = () => {
  function truncate(string ,n){
return string?.length>n ? string.substr(0,n-1)+'......':string

}
  
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://i.pinimg.com/736x/1d/cd/88/1dcd88d134b46b3cfd59058e41d1b1fa.jpg")`,
        backgroundPosition: "center center",
        backgroundColor:"black"
      }}
    >
      <div className="banner-content">
        <h1 className="banner__title">Movie Name</h1>
         <div className="banner_desc">
        <h1 className="banner_desc_text">
         {truncate(
          `this a descrpition this a descrpition this a descrpition this a descrpition
          this a descrpition this a descrpitionthis a descrpition this a descrpition
          this a descrpitionthis a descrpitionthis a descrpitionthis a descrpitionthis a descrpition
          this a descrpitionthis a descrpitionthis a descrpitionthis a descrpition
          this a descrpitionthis a descrpitionthis a descrpition`
         ,150)}
        </h1>
    

      </div>
        <div className="banner__buttons">
        <button className="banner__button"><PlayArrowIcon style={{paddingRight:'5px',height:"100px",width:'40px'}}/>Lecture</button>
          <button className="banner__button"><InfoIcon style={{paddingRight:'5px',height:"100px",width:'40px'}}/>Plus d'Infos</button>
        </div>
       
      </div>
      <div className="banner_bottom">

      </div>
      
    </div>
  )
         ;
};
export default Banner;
