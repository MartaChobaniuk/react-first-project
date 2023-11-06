import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = ({profile, status, updateStatus}) => {
  if(!profile) {
    return <Preloader />
  }

  return (
    <div className={classes.profileInfo}>
      <div className={classes.descriptionBlock}>
        <img src={profile.photos.large} alt='' />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
}

export default ProfileInfo;