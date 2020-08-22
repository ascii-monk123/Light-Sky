import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
const styles = (props) => ({
  colorPrimary: {
    color: '#fff',
  },
  root: {
    width: '60%',
    margin: '50px auto',
  },
});
class Spinner extends Component {
  render() {
    const { classes } = this.props;
    return (
      <CircularProgress
        size={'5rem'}
        classes={{
          colorPrimary: classes.colorPrimary,
        }}
      />
    );
  }
}
export default withStyles(styles)(Spinner);
