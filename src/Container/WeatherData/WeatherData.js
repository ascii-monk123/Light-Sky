import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Classes from './WeatherData.module.css';
import { withStyles } from '@material-ui/core/styles';
const styles = (props) => ({
  colorPrimary: {
    color: '#fff',
  },
});
class WeatherData extends Component {
  state = {
    data: null,
  };

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
    if (this.state.data) {
      weather = <div>Hi</div>;
    }

    return <div className={Classes.WeatherData}>{weather}</div>;
  }
}

export default withStyles(styles)(WeatherData);
