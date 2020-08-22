import React, { Component } from 'react';
import Classes from './WeatherForeCast.module.css';
import ForeCast from '../../Component/ForeCast/ForeCast';
import { fetchForecast } from '../../API/Api';

class WeatherForecast extends Component {
  state = {
    data: null,
    loading: true,
    error: false,
  };
  async componentDidMount() {
    try {
      const city = this.props.match.params.city;
      const data = await fetchForecast(city);
      this.setState({
        data: data,
        loading: false,
      });
    } catch (err) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  }
  render() {
    let forecast = null;
    if (this.state.loading) {
    } else {
      forecast = <ForeCast dataList={this.state.data} />;
    }
    return <div className={Classes.Wrapper}>{forecast}</div>;
  }
}

export default WeatherForecast;
