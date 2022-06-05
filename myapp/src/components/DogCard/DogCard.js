import React from "react";
import { dogs } from "../data/data";
import "./DogCard.css";

const DogCard = () => {
  return (
    <div className="dog-cards">
      {dogs.map((dog) => {
        return (
          <div className="card">
            <img src={dog.image} />
            <h4>{dog.name}</h4>
            <button className="delete">Delete</button>
            <button className="info">More Info</button>
          </div>
        );
      })}
    </div>
  );
};

export default DogCard;
