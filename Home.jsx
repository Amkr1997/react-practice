import React, { useEffect, useState } from "react";

import Row from "../Row/Row";
import "./Home.scss";
import axios from "axios";

const apiKey = "eb019544c0621789174f53267037aec2";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const fetchUpcoming = async () => {
    const {
      data: { results },
    } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
    console.log(upcomingMovies);
    setUpcomingMovies(results);
    console.log(upcomingMovies);
  };

  useEffect(() => {
    fetchUpcoming();
  }, []);

  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Movies"} />
      <Row title={"Tv Shows"} />
      <Row title={"My List"} />
      <Row title={"Recently Viewed"} />
    </section>
  );
};

export default Home;
