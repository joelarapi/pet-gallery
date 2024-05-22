import classes from "./AboutUs.module.css";
import joelPic from "../icons/PersonalPicture.png";

const AboutUs = () => {
  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.header}>About us</h1>
        <div className={classes.sepDiv}></div>
        <p className={classes.aboutUs}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
          <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
          <br /> Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident,
          <br /> sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className={classes.teamDiv}>
        <h1>Meet our Team </h1>
        <div className={classes.sepDiv}></div>
        <div className={classes.conDiv}>
          <img src={joelPic} className={classes.imgRes} />
          <div className={classes.infoDiv}>
            <h1>Joel Arapi</h1>
            <p className={classes.aboutUs}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>
              eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
