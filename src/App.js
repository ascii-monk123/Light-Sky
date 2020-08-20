import React, { Component } from 'react';
import './App.css';
import axios from './axios-weather';
import Header from './Component/Header/Header';
import SearchPanel from './Container/SearchPanel/SearchPanel';
import { Route, Switch } from 'react-router-dom';
import WeatherData from './Container/WeatherData/WeatherData';

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={SearchPanel} />
          <Route path="/weather" component={WeatherData} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
