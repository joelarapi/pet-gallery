import classes from "./PetDetails.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.isAdmin) {
      setIsAdmin(true);
    }
  }, []);

  useEffect(() => {
    console.log(`Fetching details for pet with id: ${id}`);
    axios
      .get(`http://localhost:8000/api/pet/${id}`)
      .then((response) => {
        console.log("Response data:", response.data);
        setPet(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the pet data!", error);
      });
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/pet/${id}`)
      .then((response) => {
        console.log("Pet deleted successfully!");
        navigate(-1);
      })
      .catch((error) => {
        console.error("Error deleting pet:", error);
      });
  };

  if (!pet) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1>Pet Details</h1>
      <div className="sepDiv"></div>
      <div className={classes.detailCard}>
        <img src={pet.image} alt={pet.name} className={classes.detailImg}/>
        <table className={classes.infoTable}>
          <p>
            <span className={classes.key}>Name:</span> {pet.name}
          </p>
          <p>
            <span className={classes.key}>Type:</span> {pet.type}
          </p>
          <p>
            <span className={classes.key}>Breed:</span> {pet.breed}
          </p>
          <p>
            <span className={classes.key}>Age:</span> {pet.age}
          </p>
          <p>
            <span className={classes.key}>Description:</span> {pet.description}
          </p>
          <p>
            <span className={classes.key}>Origin:</span> {pet.origin}
          </p>
        </table>
      </div>
      <div className={classes.buttonsDiv}>
      <button onClick={() => handleNavigate(-1)} className='goBackBttn'>
        Go back
      </button>

      {isAdmin && (
        <>
          <button
            onClick={() => handleNavigate("./edit")}
            className={classes.editBttn}
          >
            Edit Pet
          </button>
          <button onClick={handleDelete} className={classes.deleteBttn}>
            Delete
          </button>
        </>
      )}
      </div>
      
    </div>
  );
};

export default PetDetails;
