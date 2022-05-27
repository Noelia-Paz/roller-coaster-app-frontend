import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CoastersPage.css";

function CoastersPage() {
  const [coasters, setCoasters] = useState([]);
  const loadCoasters = () => {
    fetch("http://localhost:5005/api/coasters")
      .then((res) => res.json())
      .then((allCoasters) => setCoasters(allCoasters));
  };

  loadCoasters();
  return (
    <main className="container-main">
      <h1>List of all Roller Coasters</h1>
      <hr />
      {coasters.map((eachCoasters) => {
        return (
          <Link to={`/detalles/${eachCoasters._id}`}>
            <article className="coaster-card">
              <img src={eachCoasters.imageUrl} />
              <h3>{eachCoasters.title}</h3>
            </article>
          </Link>
        );
      })}
      <hr />
      <div className="divButton">
        <button className="button">
          <Link className="buttonBack" to="/">
            Back to top
          </Link>
        </button>
      </div>
    </main>
  );
}

export default CoastersPage;
