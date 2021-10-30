import './App.css';
import React from 'react';
import FrontPage from './Pages/FrontPage';
import {Route,Switch} from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import User from './Pages/User';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" component={FrontPage} exact/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/signup" component={SignupPage}/>
          <Route path="/forgotpassword" component={ForgotPasswordPage}/>
          <Route path="/user" component={User}/>
      </Switch>
    </div>
  );
}

export default App;
