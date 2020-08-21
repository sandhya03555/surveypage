import React from 'react';
import './App.css';
import logo from './assets/images/logo.png';
import LandingPage from './Components/LandingPage/LandingPage';
import CreateSurvey from './Components/CreateSurvey/CreateSurvey';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <img src={logo} alt="logo"/>
    <Switch>
    <Route path="/" component={LandingPage} exact/>
    <Route path="/create" component={CreateSurvey}/>
    </Switch>
    </div>
  );
}

export default App;
//https://www.swisstransfer.com/d/81eb43a5-f2f8-4e46-9659-45d8285e707d
