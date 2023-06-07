import React, { useEffect } from "react";
import { useState } from "react";

export default function PhotoFrame() {
  const [user, setUser] = useState([]);

  const noImage =
    "https://ipsf.net/wp-content/uploads/2021/12/dummy-image-square-370x370.webp";

  useEffect(() => {
    fetchApi();
  }, []);

  function fetchApi() {
    fetch(
      "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
    )
      .then((res) => res.json())
      .then((res) => setUser(res));
  }

  function del(index) {
    const UpdatedData = user.filter((item, id) => index !== id);
    setUser(UpdatedData);
  }

  return (
    <>
      {user.map((item, id) => (
        <div class="card">
          <div class="card-details">
            <img
              className="CradI"
              src={item.Poster !== undefined ? item.Poster : noImage}
              alt="No-poster"
            ></img>
            <div class="description">
              <span className="imgName">{item.Title}</span>
              <h5>Realease Date : {item.Year}</h5>
              <span>Duration : {item.Runtime}</span>
            </div>
          </div>
          <button class="card-button" onClick={() => del(id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
