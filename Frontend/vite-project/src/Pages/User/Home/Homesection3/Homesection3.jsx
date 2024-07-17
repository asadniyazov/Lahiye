import React from "react";
import "./Homesection3.scss";

function Homesection3() {
  return (
    <section className="Homesection3">
      <div className="Homesection3_container">
        <img
          className="Homesection3_container_img"
          src="https://anizm.net/upload/assets/donatechibi.webp"
          alt=""
        />
        <div className="Homesection3_container_div">
          <h1 className="Homesection3_container_div_h1">Donate</h1>
          <div className="Homesection3_container_div_div">
            Thanks to the donations you make to our site, we aim to provide you
            with the best infrastructure and present the films to you as quickly
            as possible.{" "}
          </div>
          <button className="Homesection3_container_btn">Donate</button>
        </div>
      </div>
    </section>
  );
}

export default Homesection3;
