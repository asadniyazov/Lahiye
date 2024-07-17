import React, { useContext, useEffect, useState } from "react";
import "./Filmsection1.scss";
import { Link } from "react-router-dom";
import { Maincontext } from "../../../../context/Mainprovider";

function Filmsection1() {
  const [films, setFilms] = useState([]);
  const [Category, setCategory] = useState([]);
  const [Search, setSearch] = useState("");
  const { AddWatchlist, AddWishlist } = useContext(Maincontext);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch("http://localhost:3100/films"); // Express sunucusundan filmleri getir
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFilms(data);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    };

    fetchFilms();
  }, []);
  useEffect(() => {
    GetProduct();
  }, []);
  async function GetProduct() {
    const res = await fetch("http://localhost:3100/films");
    const data = await res.json();
    setCategory(data);
  }

  return (
    <section className="Filmsection1">
      <div className="Filmsection1_container">
        <h1 className="Filmsection1_container_h1">Films</h1>
        <input
          className="Filmsection1_container_inp"
          placeholder="Enter Film name"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="Filmsection1_div">
          {films
            .filter((x) => x.name.toLowerCase().includes(Search.toLowerCase()))
            .map((film) => (
              <>
                <div className="Filmsection1_div_card" key={film._id}>
                  <Link to={"/detail/" + film._id}>
                    <img
                      className="Filmsection1_div_card_img"
                      src={film.imgUrl}
                      alt=""
                    />
                    <div className="Filmsection1_div_card_div">{film.name}</div>
                  </Link>
                  <button className="Filmsection_div_card_btn" onClick={() => AddWatchlist(film)}>
                    Add Watchlist
                  </button>
                  <button className="Filmsection_div_card_btn" onClick={() => AddWishlist(film)}>
                    Add Wishlist
                  </button>
                </div>
              </>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Filmsection1;
