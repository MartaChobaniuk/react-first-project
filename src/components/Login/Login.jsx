import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth.reducer';
import { Navigate } from 'react-router-dom';
import classes from '../common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField('Email', 'email', [required], Input)}
      {createField('Password', 'password', [required], Input, {type: 'password'})}
      {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'Remember me')}

      {captchaUrl && <img src={captchaUrl} alt='' />}
      {captchaUrl && createField('Symbols from image', 'captcha', [required], Input, {}) }
      
      {error && 
        <div className={classes.formSummaryError}>
          {error}
        </div>
      }

      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Navigate replace to='/profile' />
  }

  return ( 
    <div><h1>login</h1></div>,
    <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
  );
}

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login }) (Login);