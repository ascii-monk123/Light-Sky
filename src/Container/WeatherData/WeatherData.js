import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Classes from './WeatherData.module.css';
import { withStyles } from '@material-ui/core/styles';
import { fetchWeather } from '../../API/Api';
import Axios from 'axios';
import WeatherCard from '../../Component/WeatherCard/WeatherCard';
import Alert from '@material-ui/lab/Alert';
import { Animated } from 'react-animated-css';

const styles = (props) => ({
  colorPrimary: {
    color: '#fff',
  },
  root: {
    width: '60%',
    margin: '50px auto',
  },
});

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
    const { classes } = this.props;
    if (this.state.hasError) {
      return (
        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={1500}
        >
          <div className={classes.root}>
            <Alert severity="error" variant="filled" onClose={this.handleError}>
              An error happened! Go back
            </Alert>
          </div>
        </Animated>
      );
    }
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
      weather = (
        <React.Fragment>
          <WeatherCard data={this.state.data} />
          <div className={Classes.btnContainer}>
            <a
              className={Classes.btn}
              onClick={() => this.props.history.push('/')}
            >
              Go back
            </a>
            <a className={Classes.btn} onClick={this.getForcast}>
              Get Forcast
            </a>
          </div>
        </React.Fragment>
      );
    }

    return <div className={Classes.WeatherData}>{weather}</div>;
  }
}

export default withStyles(styles)(WeatherData);
