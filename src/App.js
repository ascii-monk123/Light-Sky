import React, { Component } from 'react';
import './App.css';
import axios from './axios-weather';
import Header from './Component/Header/Header';

class App extends Component {
  componentDidMount() {
    // axios
    //   .get(`/weather?q=jaipur&appid=600409249d829db023a38425bd27549b`)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }
}

export default App;
