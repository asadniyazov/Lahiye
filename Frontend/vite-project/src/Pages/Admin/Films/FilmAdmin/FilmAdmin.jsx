import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./FilmAdmin.scss";

function FilmAdmin() {
  let { id } = useParams();
  const [Category, setCategory] = useState([]);
  useEffect(() => {
    GetFilms();
  }, []);
  async function GetFilms() {
    const res = await fetch("http://localhost:3100/films");
    const data = await res.json();
    setCategory(data);
  }
  async function DeleteById(id) {
    const res = await fetch("http://localhost:3100/films/" + id, {
      method: "delete",
    });
    GetFilms();
  }
  return (
    <>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>img</th>
          <th>video</th>
          <th>Rating</th>
          <th>description</th>
          <th>delete</th>
        </tr>
        {Category.map((x) => (
          <tr>
            <td>{x._id}</td>
            <td>{x.name}</td>
            <td>
              <img src={x.imgUrl} alt="" />
            </td>
            <td>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${Category.videoUrl}`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </td>
            <td>{x.rating}</td>
            <td>{x.description}</td>
            <td>
              <button onClick={() => DeleteById(x._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default FilmAdmin;
