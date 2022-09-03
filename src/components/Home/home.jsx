import React from "react";
import NavBar from "../Navbar/NavBar";
import "../../components/Home/home.scss";
import Banner from "../Banner/Banner";
import requests from "../Request";
import Row from "../Row/row";

const Home = () => {
  return (
    <div className="home">
      <NavBar />

      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}>
        isLargeRow
      </Row>
      <Row title="Trending Now" fetchURL={requests.fetchTrending}></Row>
      <Row title="Top rated" fetchURL={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}></Row>
    </div>
  );
};

export default Home;
