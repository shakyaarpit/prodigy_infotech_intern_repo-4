import React from "react";

import Data from "./Data";

console.log(Data)

const Services = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", padding: "10px" }}>Our Services</h1>
       {
        Data.map((value, index)=>{
          return   <div className="servicesSection" key={index}>
          <div className="card">
            <img src={value.img} alt="" />
            <h2>{value.title}</h2>
            <p>
              {value.desc}
            </p>
          </div>
        </div>
        })
       }
     
    </>
  );
};

export default Services;
