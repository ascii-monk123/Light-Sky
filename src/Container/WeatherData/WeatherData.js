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
  };
  handleError = () => {
    this.props.history.push('/');
  };
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
      });
    } catch (err) {
      this.setState({
        loading: false,
        hasError: true,
      });
    }
  }
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
        </React.Fragment>
      );
    }

    return <div className={Classes.WeatherData}>{weather}</div>;
  }
}

export default withStyles(styles)(WeatherData);
