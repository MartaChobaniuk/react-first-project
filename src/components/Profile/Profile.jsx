import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

  return (
    <div className={classes}>
      < ProfileInfo isOwner={props.isOwner} 
                    profile={props.profile} 
                    status={props.status} 
                    updateStatus={props.updateStatus} 
                    savePhoto={props.savePhoto} />
      < MyPostsContainer />
    </div>
  );
}

export default Profile;