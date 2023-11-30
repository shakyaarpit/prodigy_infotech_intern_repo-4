import React from "react";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero
        title="Find Your Parfect Tutor"
        visit="/services"
        img="/student.jpeg"
        btnName="Get Started"
      />
    </div>
  );
};

export default Home;
