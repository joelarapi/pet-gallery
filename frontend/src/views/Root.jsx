
import { Outlet } from 'react-router-dom';
import SideNav from '../components/SideNav'
import classes from './Root.module.css'

const RootLayout = () => {
  return (
    <div className={classes.rootLayout}>
    <div className={classes.nav}>
    <SideNav />
    </div>

      <div className={classes.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
