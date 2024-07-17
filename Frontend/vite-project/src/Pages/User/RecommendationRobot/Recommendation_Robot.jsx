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
            <label className="Recommendation_Robot_label">
              Choose Category:
            </label>
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
            <label className="Recommendation_Robot_label">Choose Year:</label>
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
        <button
          className="Recommendation_Robot_btn"
          onClick={handleTavsiyeGetir}
        >
          Bring recommendations
        </button>

        <div>
          <h2 className="Recommendation_Robot_h2">Recommended movies</h2>
          <div className="Recommendation_div">
            {tavsiyeFilmler.map((film, index) => (
              <div className="Recommendation_box" key={index}>
                <img className="Recommendation_img" src={film.imgUrl}></img>
                <h3>{film.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommendation_Robot;
