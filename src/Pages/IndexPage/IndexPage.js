import React from "react";
import { Link } from "react-router-dom";
import "./indexPage.css";

function IndexPage() {
  return (
    <main className="main">
      <h1> Welcome to our Page! </h1>
      <hr />
      <p className="text">
        On this site you can find all the roller coasters and see the details of
        each one, look at the gallery.
      </p>
      <Link className="galleryLink" to="/galeria">
        See Gallery
      </Link>
    </main>
  );
}

export default IndexPage;
