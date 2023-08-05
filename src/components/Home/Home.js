import React from "react";
import heromain from "../CartWidget/assets/heromain.jpg";

const Home = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <div className="row p-0 m-0">
        <div className="col-12 text-center position-relative p-0 m-0">
          <img src={heromain} alt="heromain" className="img-fluid " />
          <h1 className="text-white p-0 mt-2 position-absolute top-50 start-50 translate-middle">
            BIENVENIDOS A HYGGE CLOTHES
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
