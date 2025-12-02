import classes from "./Dashboard.module.css";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import catImg from "../icons/catImage.jpg";
import birdImg from "../icons/birdImg.jpg";
import dogImg from '../icons/dogImg.jpg'

const UserDashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.isAdmin) {
      setIsAdmin(true);
    }
  }, []);


  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className={classes.container}>
      {isAdmin ? <h1>Admin view</h1> : <h1>Pet Gallery</h1>}
      <div className='sepDiv'></div>
  

      <div className={classes.galleryRow}>
        <div className='galleryContainer'  onClick={() => handleNavigate('./cat-gallery')}>
          <img src={catImg} className='galleryImg' />
          <div className='cardInfo'>
            <h1>Cat Pictures</h1>
            <p>Take a look at some of these cute cat pictures</p>
          </div>
        </div>

        <div className='galleryContainer'  onClick={() =>handleNavigate('./dog-gallery')}>
          <img src={dogImg} className='galleryImg' />
          <div className='cardInfo'>
            <h1>Dog Pictures</h1>
            <p>Take a look at some of these cute dog pictures</p>
          </div>
        </div>

        <div className='galleryContainer' onClick={() =>handleNavigate('./bird-gallery')}>
          <img src={birdImg} className='galleryImg' />
          <div className='cardInfo'>
            <h1>Bird Pictures</h1>
            <p>Take a look at some of these cute bird pictures!!!!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
