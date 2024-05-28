import classes from "./SideNav.module.css";
import logo from "../icons/logo.svg";
import logoutIcon from "../icons/logoutIcon.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const SideNav = () => {
  const [errMsg, setErrMsg] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.isAdmin) {
      setIsAdmin(true);
    }
  }, []);

  function handleLogout(e) {
    e.preventDefault();
    try {
      const response = axios.post("http://localhost:8000/api/logout", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(JSON.stringify(response?.data));
      localStorage.removeItem("userData");
      navigate("/login");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing username or password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  }

  return (
    <div className={classes.top}>
      <div>
        <img src={logo} className={classes.image} />
        <h1 className={classes.h1}>Pet Gallery</h1>
      </div>
      <div className={classes.options}>
        <ul>
          <ul>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </ul>
          <ul>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              About Us
            </NavLink>
          </ul>
          <ul>
            <NavLink
              to="/contact-page"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Contact Us
            </NavLink>
          </ul>
        </ul>
      </div>

      <button className={classes.logoutButton} onClick={handleLogout}>
        Log out <img src={logoutIcon} className={classes.logoutImg} />
      </button>
    </div>
  );
};

export default SideNav;
