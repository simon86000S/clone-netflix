import React from "react";
import NavBar from "../Navbar/NavBar";
import "../../components/Home/home.scss";
import Banner from "../Banner/Banner";
import requests from "../request";
import Row from "../Row/row";
import Home from "./home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const home = () => {
  return (
    <Router>
      <div className="home">
        <NavBar />
        <Banner />

        <Row
          title="NETFLIX ORIGINALS"
          fetchURL={requests.fetchNetflixOriginals}
          isLargeRow
        ></Row>
        <Row title="Trending Now" fetchURL={requests.fetchTrending}></Row>
        <Row title="Top rated" fetchURL={requests.fetchTopRated}></Row>
        <Row title="Action Movies" fetchURL={requests.fetchActionMovies}></Row>
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}></Row>
        <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}></Row>
        <Row
          title="Romance Movies"
          fetchURL={requests.fetchRomanceMovies}
        ></Row>
        <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}></Row>
      </div>
    </Router>
  );
};

export default home;
