import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detailsection1.scss";

function Detailsection1() {
  let { id } = useParams();
  const [Category, setCategory] = useState([]);
  useEffect(() => {
    GetById();
  }, []);
  async function GetById() {
    const res = await fetch("http://localhost:3100/films/" + id);
    const data = await res.json();
    setCategory(data);
  }
  return (
    <>
      <section className="Detailsection1">
        <div className="Detailsection1_container">
          <img className="Detailsection_img" src={Category.imgUrl} alt="" />
          <div className="Detailsection1_div">
            <div className="Detailsection1_name">{Category.name}</div>
            <div className="Detailsection1_description">
              {Category.description}
            </div>
          </div>
        </div>

        <div className="video-responsive">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${Category.videoUrl}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Detailsection1;
