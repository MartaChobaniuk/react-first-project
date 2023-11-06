import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { compose } from 'redux';
import { initializeApp } from './redux/app.reducer';
import Preloader from './components/common/Preloader/Preloader';
import { Provider } from 'react-redux';
import store from './redux/redux.store';
import { withSuspense } from './HOC/withSuspense';
const DialogsContainer = React.lazy( () => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy( () => import('./components/Profile/ProfileContainer'));
class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        < HeaderContainer />
        < Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route>
              <Route  path='/profile/:userId?' 
                      Component={ withSuspense(ProfileContainer) } />
              <Route  path='/dialogs' 
                      Component={ withSuspense(DialogsContainer) } />
              <Route path='/users' Component={ () => <UsersContainer /> }/>
              <Route path='/login' Component={ () => <Login /> }/>
            </Route>
          </Routes>
        </div>
      </div>
    );
  }
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})) (App);

const MainApp = (props) => {
  return <HashRouter hashType={'slash'}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
}

export default MainApp;
