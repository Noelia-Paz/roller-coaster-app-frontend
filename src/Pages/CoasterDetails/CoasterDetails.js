import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./CoasterDetails.css";

function CoasterDetails() {
  const { coasters_id } = useParams();
  const [coaster, setCoaster] = useState({});
  const loadCosterDetails = () => {
    fetch(`http://localhost:5005/api/details/${coasters_id}`)
      .then((res) => res.json())
      .then((coaster) => setCoaster(coaster));
  };
  loadCosterDetails();
  return (
    <main className="coaster-datails">
      <h1> Details of {coaster.title}</h1>
      <hr />
      <img
        src={coaster.imageUrl}
        style={{ display: "inline-block", width: "40%" }}
      />
      <article style={{ display: "contents", width: "40%" }}>
        <p>{coaster.description}</p>
        <h3>Specs</h3>
        <ul>
          <li>Length: {coaster.length}</li>
          <li>Investments:{coaster.inversions}</li>
        </ul>
        <button class="btnBack">
          <Link className="btnLink" to="/galeria">
            Back
          </Link>
        </button>
      </article>
    </main>
  );
}

export default CoasterDetails;
