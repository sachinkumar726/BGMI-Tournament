import React, { useState, useEffect } from "react";
import "./Home.css";
import imageSrc from "./Images/Iamge1.png";

const HomePage = () => {
  const [titles, setTitles] = useState([
    "Welcome to BGMI Software Solutions",
    "Providing Live Result Software "
  
  ]);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Effect to rotate titles every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000); // Change title every 5 seconds

    return () => clearInterval(interval);
  }, [titles]);

  return (
    <main className="main">
      {/* HOME */}
      <section className="home bd-grid" id="home">
        <div className="home__data">
          <h1 className="home_title">
            {titles[currentTitleIndex]}
          </h1>
          <p className="home_text">
            Hi there! I'm Abhi, and I provide specialized software solutions for BGMI (Battlegrounds Mobile India).
            <br />
            Explore our cutting-edge tools and services tailored for BGMI enthusiasts.
            <br />
            Our software enables real-time match results and analytics for BGMI tournaments.
            <br />
            Experience the thrill of live match updates and detailed statistics with our solutions.
          </p>
        </div>
        <div className="image">
          <img src={imageSrc} alt="Your Image" />
        </div>
      </section>
    </main>
  );
};

export default HomePage;