import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import classes from "./Root.module.css";

const RootLayout = () => {
  return (

      <div className={classes.container}>
      <SideNav  />
        <Outlet />
      </div>


  );
};

export default RootLayout;
