import React, { useState, useEffect } from "react";
import "./Recommendation_Robot.scss";

function Recommendation_Robot() {
  const [category, setcategory] = useState([]);
  const [years, setYears] = useState([]);
  const [choosenCategory, setchoosenCategory] = useState("");
  const [Choosenyear, setChoosenyear] = useState("");
  const [tavsiyeFilmler, setTavsiyeFilmler] = useState([]);
  useEffect(() => {
    // Kategorileri ve yılları fetch API ile çekme
    fetch("http://localhost:3100/api/kategoriler")
      .then((res) => res.json())
      .then((data) => setcategory(data))
      .catch((err) => console.error("Kategoriler getirilirken hata:", err));

    fetch("http://localhost:3100/api/yillar")
      .then((res) => res.json())
      .then((data) => setYears(data))
      .catch((err) => console.error("Yıllar getirilirken hata:", err));
  }, []);

  const handleKategoriChange = (event) => {
    setchoosenCategory(event.target.value);
  };

  const handleYilChange = (event) => {
    setChoosenyear(event.target.value);
  };

  const handleTavsiyeGetir = () => {
    fetch("http://localhost:3100/api/tavsiyeler", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category: choosenCategory, year: Choosenyear }),
    })
      .then((res) => res.json())
      .then((data) => setTavsiyeFilmler(data))
      .catch((err) => console.error("Tavsiyeler getirilirken hata:", err));
  };

  return (
    <div className="Recommendation_Robot">
      <div className="Recommendation_robot_container">
        <h1 className="Recommendation_Robot_h1">movie recommendation robot</h1>
        <div>

        <div>
          <label>Choose Category:</label>
          <select value={choosenCategory} onChange={handleKategoriChange}>
            <option value="">-- Choose--</option>
            {category.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Choose Year:</label>
          <select value={Choosenyear} onChange={handleYilChange}>
            <option value="">-- Choose --</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        </div>
        <button onClick={handleTavsiyeGetir}>Bring recommendations</button>

        <div>
          <h2>Recommended movies</h2>
          <ul>
            {tavsiyeFilmler.map((film, index) => (
              <li key={index}>
                <h3>{film.name}</h3>
                <img src={film.imgUrl}></img>
                <p>{film.description}</p>
                <div className="video-responsive">
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${film.videoUrl}`}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                {/* Diğer film detayları buraya eklenir */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Recommendation_Robot;
