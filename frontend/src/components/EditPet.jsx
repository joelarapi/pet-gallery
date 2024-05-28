import classes from "./EditPet.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditPet = () => {
  const { id } = useParams();
  const [pet, setPet] = useState({
    name: "",
    image: "",
    type: "",
    breed: "",
    age: 0,
    description: "",
    origin: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  useEffect(() => {
    console.log(`Fetching details for pet with id: ${id}`);
    axios
      .get(`http://localhost:8000/api/pet/${id}`)
      .then((response) => {
        setPet(response.data.pet);
      })
      .catch((error) => {
        console.error("There was an error fetching the pet data!", error);
      });
  }, [id]);

  const editPet = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/pet/${id}/update`, pet)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate(-1);
      })
      .catch((err) => {
        setErrorMessage("Error updating pet");
        console.error("Error updating pet:", err);
      });
  };



  if (!pet) {
    return <p>Loading...</p>;
  }

  return (
    <form className={classes.petForm} onSubmit={editPet}>
      <div className={classes.textInput}>
        <label>Pet Name</label>
        <input
        value={pet.name}
          type="text"
          placeholder="Name"
          onChange={(e) => setPet({ ...pet, name: e.target.value })}
        />
      </div>

      <div className={classes.textInput}>
        <label>Breed</label>
        <input
         value={pet.breed}
          type="text"
          placeholder="What kind of breed is the pet?"
          onChange={(e) => setPet({ ...pet, breed: e.target.value })}
        />
      </div>

      <div className={classes.textInput}>
        <label>Age</label>
        <input
         value={pet.age}
          type="number"
          min="0"
          placeholder="0"
          onChange={(e) => setPet({ ...pet, age: e.target.value })}
        />
      </div>

      <div className={classes.textInput}>
        <label>Origin</label>
        <input
         value={pet.origin}
          type="text"
          placeholder="Tell us about it's origin"
          onChange={(e) => setPet({ ...pet, origin: e.target.value })}
        />
      </div>

      <div className={classes.textInput}>
        <label>Image</label>
        <input
         value={pet.image}
          type="text"
          placeholder="Place the image URL here"
          onChange={(e) => setPet({ ...pet, image: e.target.value })}
        />
      </div>
      <div className={classes.textInput}>
        <label>Type</label>
        <select value={pet.type}           onChange={(e) => setPet({ ...pet, type: e.target.value })}>
          <option value="bird">Bird</option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
        </select>
      </div>

      <div className={classes.textInput}>
        <label>Description</label>
        <textarea      value={pet.description}      onChange={(e) => setPet({ ...pet, description: e.target.value })} />
      </div>
      <div>
        <button className={classes.submitBttn}>Edit Pet</button>
      </div>
    </form>
  );
};

export default EditPet;
