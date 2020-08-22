import React, { Component } from 'react';
import Classes from './WeatherData.module.css';
import { fetchWeather } from '../../API/Api';
import WeatherCard from '../../Component/WeatherCard/WeatherCard';
import Spinner from '../../Component/UI/Spinner/Spinner';
import Alerts from '../../Component/UI/Alerts/Alerts';

class WeatherData extends Component {
  state = {
    data: null,
    loading: true,
    hasError: false,
    query: '',
  };
  /*****************Error handler *************/
  handleError = () => {
    this.props.history.push('/');
  };

  /************In order to get the forcast ***********/
  getForcast = () => {
    this.props.history.push(`/weather/${this.state.query}`);
  };
  /*****************Fetching the date from the server ****************************** */
  async componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    let city = '';
    for (let params of query.entries()) {
      city = params[1];
    }

    try {
      const data = await fetchWeather(city);
      data['region'] = city;
      this.setState({
        loading: false,
        data: data,
        query: city,
      });
    } catch (err) {
      this.setState({
        loading: false,
        hasError: true,
      });
    }
  }
  /*************************************For redering *******************************************/
  render() {
    if (this.state.hasError) {
      return <Alerts error={this.handleError} />;
    }
    let weather = (
      <div className={Classes.WrapperDiv}>
        <Spinner />
      </div>
    );
    if (!this.state.loading) {
      weather = (
        <React.Fragment>
          <WeatherCard data={this.state.data} />
          <div className={Classes.btnContainer}>
            <button
              className={Classes.btn}
              onClick={() => this.props.history.push('/')}
            >
              Go back
            </button>
            <button className={Classes.btn} onClick={this.getForcast}>
              Get Forcast
            </button>
          </div>
        </React.Fragment>
      );
    }

    return <div className={Classes.WeatherData}>{weather}</div>;
  }
}

export default WeatherData;
