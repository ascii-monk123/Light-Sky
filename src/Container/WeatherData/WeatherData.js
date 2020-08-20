import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Classes from './WeatherData.module.css';
import { withStyles } from '@material-ui/core/styles';
import { fetchWeather } from '../../API/Api';
import Axios from 'axios';
import WeatherCard from '../../Component/WeatherCard/WeatherCard';
const styles = (props) => ({
  colorPrimary: {
    color: '#fff',
  },
});
class WeatherData extends Component {
  state = {
    data: null,
    loading: true,
  };
  async componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    let city = '';
    for (let params of query.entries()) {
      city = params[1];
    }
    this.setState({
      loading: false,
    });
    // const weatherData = await fetchWeather(city);
  }
  render() {
    const { classes } = this.props;
    let weather = (
      <div className={Classes.WrapperDiv}>
        <CircularProgress
          size={'5rem'}
          classes={{
            colorPrimary: classes.colorPrimary,
          }}
        />
      </div>
    );
    if (!this.state.loading) {
      weather = <WeatherCard />;
    }

    return <div className={Classes.WeatherData}>{weather}</div>;
  }
}

export default withStyles(styles)(WeatherData);

/**
 * {coord: {…}, weather: Array(1), base: "stations", main: {…}, visibility: 10000, …}
base: "stations"
clouds: {all: 0}
cod: 200
coord: {lon: 139.75, lat: 35.69}
dt: 1597946590
id: 1861060
main:
feels_like: 303.65
humidity: 88
pressure: 1012
temp: 301.09
temp_max: 302.04
temp_min: 299.82
__proto__: Object
name: "Japan"
sys: {type: 1, id: 8074, country: "JP", sunrise: 1597953882, sunset: 1598001839}
timezone: 32400
visibility: 10000
weather: Array(1)
0:
description: "clear sky"
icon: "01n"
id: 800
main: "Clear"
__proto__: Object
length: 1
__proto__: Array(0)
wind:
deg: 190
speed: 6.2
__proto__: Object
__proto__: Object
 * 
 * 
 */
