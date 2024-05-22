import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import classes from './Login.module.css';


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  const errRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        { email: username, password }, 
  
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, 
        }
      );
  
      console.log(response.config);
  
      const userData = response?.data?.user;
  
      if (userData) {
        localStorage.setItem("userData", JSON.stringify(userData));
  
        setUsername("");
        setPassword("");
  
        if (userData.isAdmin) {
          navigate("/admin-dashboard");
        } else {
          navigate("/dashboard");
        }
      } else {
        setErrMsg("Login Failed");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setErrMsg("An error occurred during login.");
      console.error(err.response);
    }
  
    console.log({ email: username, password });
  };

  return (
    <>
      <form
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <p
          ref={errRef}
          className={errMsg ? "errmMsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <p className={classes.loginText}>Log in</p>
        <div className={classes.container}>
          <div className={classes.inputContainer}>
            <div className={classes.inputField}>
              <input
                type="text"
                id="username"
                autoComplete="off"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
                className={classes.input}
              />
              <label className={classes.button}>
                Email
              </label>
            </div>
          </div>
          <div className={classes.inputContainer}>
            <div className={classes.inputField}>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                className={classes.input}
              />
              <label className={classes.button}>
                Password
              </label>
            </div>
          </div>

          <button className={classes.loginButton}>
            Log In
          </button>
          <p className={classes.fPass}>
            Forgot Password? <button className={classes.grayText}>Click Here</button>
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
