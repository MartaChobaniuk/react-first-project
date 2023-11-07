import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../img/userPhoto.webp';
import classes from './Users.module.css';

const User = ({user, followingInProgress, unfollow, follow}) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id } >
            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='' className={classes.userPhoto} />
          </NavLink>
        </div>

        <div>
          {user.followed 
            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
              unfollow(user.id);
            }}>Unfollow</button>

            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
              follow(user.id);
            }}>Follow</button>
          }  
        </div>
      </span>

      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>

        <span>
          <div>{'user.location.city'}</div>
          <div>{'user.location.country'}</div>
        </span>
      </span>
    </div>)
}

export default User;