import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import SearchPanel from './Container/SearchPanel/SearchPanel';
import { Route, Switch } from 'react-router-dom';
import WeatherData from './Container/WeatherData/WeatherData';
import WeatherForecast from './Container/WeatherForecast/WeatherForecast';
import NotFound from './Component/404/NotFound';

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/weather/:city" component={WeatherForecast} />
          <Route path="/" exact component={SearchPanel} />
          <Route path="/weather" component={WeatherData} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
