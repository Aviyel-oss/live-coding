import React from "react";
import "./Home.css";
import logoImage from "../../Assets/Images/logo.png";
import bgBackImage from "../../Assets/Images/bgBack.png";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logoImage} className="logo-image" alt="cinema search" />
          Cinema Search
        </div>
      </header>

      <section className="home">
        <img src={bgBackImage} className="home-image" alt="book shelf image" />
        <div className="home-content">
          <h1>Search movies from old to new</h1>
          <p>
            Search movies on the go. you can search anything you like. search
            result will be displayed as you type it.Now, you dont have to hit
            enter anymore.Typsense is the best!!!.
          </p>
          {/* <Link href="search" className="searchcinema"> */}
          <Link to="/search" className="searchcinema">
            Search Cinema
          </Link>
          {/* Search Cinema{" "} */}
          {/* </a> */}
        </div>
      </section>
    </>
  );
};

export default Home;
