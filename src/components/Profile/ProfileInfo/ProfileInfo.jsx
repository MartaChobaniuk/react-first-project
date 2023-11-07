import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../img/userPhoto.webp';


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  if(!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  return (
    <div className={classes.profileInfo}>
      <div className={classes.descriptionBlock}>
        <img 
          src={profile.photos.large || userPhoto} 
          alt=''
          className={classes.profileInfoPhoto} 
        />
        <br/>
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/> }

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
}

export default ProfileInfo;