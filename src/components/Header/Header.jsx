import React from 'react';
import classes from './Header.module.css';
import logoPhoto from '../../img/logo_img.jpg';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img className={classes.headerLogo} src={logoPhoto} alt=''/>

      <div className={classes.headerLoginBlock}>
        { props.isAuth 
          ? <div> {props.login} - <button onClick={props.logout}>Log out</button> </div> 
          : <NavLink to={'/login'}>Login</NavLink> 
        }
      </div>
    </header>
  );
}

export default Header;