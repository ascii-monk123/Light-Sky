import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Animated } from 'react-animated-css';
import Alert from '@material-ui/lab/Alert';
const styles = (props) => ({
  colorPrimary: {
    color: '#fff',
  },
  root: {
    width: '60%',
    margin: '50px auto',
  },
});

const Alerts = (props) => {
  const { classes } = props;
  return (
    <Animated
      animationIn="bounceInLeft"
      animationOut="fadeOut"
      isVisible={true}
      animationInDuration={1500}
    >
      <div className={classes.root}>
        <Alert severity="error" variant="filled" onClose={props.error}>
          An error happened! Go back
        </Alert>
      </div>
    </Animated>
  );
};

export default withStyles(styles)(Alerts);
