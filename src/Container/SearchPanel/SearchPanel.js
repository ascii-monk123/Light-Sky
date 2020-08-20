import React, { Component } from 'react';
import Classes from './SearchPanel.module.css';
import { TextField, InputAdornment } from '@material-ui/core';
import { BsSearch } from 'react-icons/bs';
import { withStyles } from '@material-ui/core/styles';
import Button from '../../Component/UI/Button/Button';
import axios from '../../axios-weather';
const styles = {
  root: {
    background: '#fff',
    opacity: 0.9,
  },
  input: {
    color: '#000',
    fontSize: '20px',
    fontFamily: 'cursive',
  },
};

class SearchPanel extends Component {
  state = {
    query: '',
    data: null,
  };

  changeHandler = (event) => {
    const text = event.target.value;
    this.setState({
      query: text,
    });
  };
  getWeatherData = () => {
    if (this.state.query) {
      const queryString =
        encodeURIComponent('location') +
        '=' +
        encodeURIComponent(this.state.query);
      this.props.history.push({
        pathname: '/weather',
        search: '?' + queryString,
      });
    }
  };
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={Classes.SearchPanel}>
        <TextField
          id="custom-css-standard-input"
          placeholder="Enter Country Name"
          variant="filled"
          fullWidth
          className={classes.root}
          onChange={this.changeHandler}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BsSearch />
              </InputAdornment>
            ),
            classes: {
              root: classes.input,
            },
          }}
        />
        <Button title={'Get Forecast'} clicked={this.getWeatherData} />
      </div>
    );
  }
}

export default withStyles(styles)(SearchPanel);
