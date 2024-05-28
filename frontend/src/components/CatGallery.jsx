import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddPet from "./AddPet";

const CatGallery = () => {
  const [cats, setCats] = useState([]);
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/pet/${id}`);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets")
      .then((response) => {
        const cats = response.data.filter((pet) => pet.type === "cat");
        setCats(cats);
      })
      .catch((error) => {
        console.error("There was an error fetching the pet data!", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>List of Cats</h1>
      <div className="sepDiv"></div>
      {cats.length === 0 ? (
        <p>No cats available</p>
      ) : (
        <ul className="galleryRow">
          {cats.map((cat) => (
            <li
              key={cat._id}
              className="galleryContainer"
              onClick={() => handleNavigate(cat._id)}
            >
              <img src={cat.image} className="galleryImg" alt={cat.name} />
              <h1>{cat.name}</h1>
              <div className="cardInfo">
                <p>Age: {cat.age}</p>
                <p>Breed: {cat.breed}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <AddPet />
    </div>
  );
};

export default CatGallery;
