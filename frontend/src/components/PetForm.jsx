import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import classes from "./PetForm.module.css";
const PetForm = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState([""]);
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState([""]);
  const [breed, setBreed] = useState("");
  const [origin, setOrigin] = useState("");
  const navigate = useNavigate();



  const createPet = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/pet", {
        name,
        type,
        breed,
        age,
        description,
        image,
        origin,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setImage("");
        setName("");
        setType("");
        setDescription("");
        setOrigin("");
        setAge("");
        setBreed("");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.error("Error creating pet:", err);
      });
  };

  return (
    <form className={classes.petForm}>
      <div className={classes.textInput}>
        <label>Pet Name</label>
        <input type="text" placeholder="Name"      onChange={(e) => setName(e.target.value)}/>
      </div>

      <div className={classes.textInput}>
        <label>Breed</label>
        <input type="text" placeholder="What kind of breed is the pet?"      onChange={(e) => setBreed(e.target.value)}/>
      </div>

      <div className={classes.textInput}>
        <label>Age</label>
        <input type="number" min="0" placeholder="0"  onChange={(e) => setAge(e.target.value)}/>
      </div>

      <div className={classes.textInput}>
        <label>Origin</label>
        <input type="text" placeholder="Tell us about it's origin"      onChange={(e) => setOrigin(e.target.value)}/>
      </div>

      <div className={classes.textInput}>
        <label>Image</label>
        <input type="text" placeholder="Place the image URL here"      onChange={(e) => setImage(e.target.value)} />
      </div>
      <div className={classes.textInput}>
        <label>Type</label>
        <select    value={type}           onChange={(e) => setType(e.target.value)}>
          <option value="bird">Bird</option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
        </select>
      </div>

      <div className={classes.textInput}>
        <label>Description</label>
        <textarea onChange={(e) => setDescription(e.target.value)}/>
      </div>
      <div>
      <button onClick={createPet} className={classes.submitBttn}>
        Submit Pet
      </button>
      </div>

    </form>
  );
};

export default PetForm;
