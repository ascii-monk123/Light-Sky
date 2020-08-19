import React from 'react';
import classes from './Logo.module.css';
import { FaCloud } from 'react-icons/fa';
import { Animated } from 'react-animated-css';

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <Animated
        animationIn="bounceInDown"
        animationOut="fadeOut"
        isVisible={true}
        animationInDuration={1500}
      >
        <h3>
          <FaCloud
            style={{
              fontSize: '120px',
            }}
            className={classes.icon}
          />
        </h3>
      </Animated>
    </div>
  );
};

export default Logo;
