import React from 'react';
import {createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';

const ProfileDataForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit()}>
      <div><button>Save</button></div>

      <div>
        <b>Full name:</b>{createField('Full name', 'FullName', [], Input)}
      </div> 

      <div>
        <b>Looking for a job:</b> {createField('', 'lookingForAJob', [], Input, {type:'checkbox'} )}
      </div>

      <div>
        <b>My professional skills:</b> {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
      </div>

      <div>
        <b>About me:</b> {createField('About me', 'aboutMe', [], Textarea)}
      </div>
    </form>
  );
}

const ProfileDataFormReduxForm = reduxForm({form:'profileDataForm', destroyOnUnmount: false})(ProfileDataForm);

export default ProfileDataFormReduxForm;