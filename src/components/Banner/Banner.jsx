import React from "react";
import "../../components/Banner/Banner.scss";

const Banner = () => {
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://i.pinimg.com/736x/1d/cd/88/1dcd88d134b46b3cfd59058e41d1b1fa.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner_desc">
        <h1 className="banner_title">this is a decription</h1>
      </div>
      </div>
      <div className="banner_bottom">

      </div>
      
    </div>
  );
};
export default Banner;
