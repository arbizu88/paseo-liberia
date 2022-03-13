import React from "react";
import styles from "./Activity.module.css";

const Activity = ({ id, name, image }) => {
  return (
    <div className="row">
      <div className="mb-3">
        <div id={id} className="card">
          <img
            src={process.env.PUBLIC_URL + image}
            className={`card-img-top ${styles.imagesize}`}
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
