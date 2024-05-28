import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddPet from "./AddPet";

const BirdGallery = () => {
  const [birds, setBirds] = useState([]);
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/pet/${id}`);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets")
      .then((response) => {
        const cats = response.data.filter((pet) => pet.type === "bird");
        setBirds(cats);
      })
      .catch((error) => {
        console.error("There was an error fetching the pet data!", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>List of Birds</h1>
      <div className="sepDiv"></div>

      {birds.length === 0 ? (
        <p>No Birds available</p>
      ) : (
        <ul className="">
          {birds.map((bird) => (
            <li
              key={bird._id}
              className="galleryContainer"
              onClick={() => handleNavigate(bird._id)}
            >
              <img
                src={bird.image}
                className='galleryImg'
                alt={bird.name}
              />
              <h1>{bird.name}</h1>
              <div className="cardInfo">
              <p>Age: {bird.age}</p>
              <p>Breed: {bird.breed}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <AddPet />
    </div>
  );
};

export default BirdGallery;
