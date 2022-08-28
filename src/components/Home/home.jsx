
import React from "react";
import NavBar from "../Navbar/NavBar";
import '../../components/Home/home.scss';
import Banner from "../Banner/Banner";


const Home = () => {
  return (
    <div className='home'>
        <NavBar/>
        
      <Banner/>
     
        </div>
  )
}

export default Home