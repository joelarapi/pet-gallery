import  { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddPet from "./AddPet";

const DogGallery = () => {
  const [dogs, setDogs] = useState([]);
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/pet/${id}`);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets")
      .then((response) => {
        const dogs = response.data.filter((pet) => pet.type === "dog");
        setDogs(dogs);
      })
      .catch((error) => {
        console.error("There was an error fetching the pet data!", error);
      });
  }, []);

  return (
    <div className="container">
    <h1>List of Dogs</h1>
    <div className="sepDiv"></div>
    {dogs.length === 0 ? (
      <p>No cats available</p>
    ) : (
      <ul className="galleryRow">
        {dogs.map((dog) => (
          <li
            key={dog._id}
            className="galleryContainer"
            onClick={() => handleNavigate(dog._id)}
          >
            <img src={dog.image} className="galleryImg" alt={dog.name} />
            <h1>{dog.name}</h1>
            <div className="cardInfo">
              <p>Age: {dog.age}</p>
              <p>Breed: {dog.breed}</p>
            </div>
          </li>
        ))}
      </ul>
    )}
    <AddPet />
  </div>
  );
};

export default DogGallery;
