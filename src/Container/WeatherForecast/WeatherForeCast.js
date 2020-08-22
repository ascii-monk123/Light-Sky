import React, { Component } from 'react';
import Classes from './WeatherForeCast.module.css';
import ForeCast from '../../Component/ForeCast/ForeCast';
import { fetchForecast } from '../../API/Api';
import Spinner from '../../Component/UI/Spinner/Spinner';
import Alerts from '../../Component/UI/Alerts/Alerts';
class WeatherForecast extends Component {
  state = {
    data: null,
    loading: true,
    error: false,
  };
  handleError = () => {
    this.props.history.push('/');
  };
  goToHome = () => {
    this.props.history.push('/');
  };
  async componentDidMount() {
    try {
      console.log('call made');
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
    if (this.state.error) {
      return <Alerts error={this.handleError} />;
    }
    if (this.state.loading) {
      forecast = <Spinner />;
    } else {
      forecast = <ForeCast dataList={this.state.data} />;
    }
    return (
      <div className={Classes.Wrapper}>
        {forecast}
        <button className={Classes.btn} onClick={this.goToHome}>
          Go to Home
        </button>
      </div>
    );
  }
}

export default WeatherForecast;
