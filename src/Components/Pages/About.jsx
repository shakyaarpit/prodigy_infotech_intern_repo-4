import React from "react";
import Hero from "./Hero";

const About = () => {
  return (
    <div>
      <Hero
        title="Welcome to  Home Page"
        visit="/contact"
        img="/about.jpeg"
        btnName="Contact"
      />
    </div>
  );
};

export default About;
