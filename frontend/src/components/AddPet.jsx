import plusIcon from "../icons/plusIcon.svg";
import { useEffect, useState } from "react";
import classes from "./AddPet.module.css";
import { useNavigate } from "react-router-dom";

const AddPet = () => {
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
  return (
    <div className={classes.container}>
      {isAdmin && (
        <div
          className={classes.addContainer}
          onClick={()=>handleNavigate("/pet-form")}
        >
          <div>
            <button className={classes.imgBttn}>
              <img src={plusIcon} />
            </button>

            <div className={classes.content}>
              <h2>Add a new Pet</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPet;
