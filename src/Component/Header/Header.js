import React from 'react';
import Classes from './Header.module.css';
import Logo from './Logo/Logo';
import { Animated } from 'react-animated-css';
const header = () => {
  return (
    <header className={Classes.header}>
      <Logo />

      <div className={Classes.TitleBox}>
        <Animated
          animationIn="bounceInDown"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={1500}
        >
          <h1>Light Sky</h1>
        </Animated>
      </div>

      <div className={Classes.LinkContainer}>
        <Animated
          animationIn="bounceInDown"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={1500}
        >
          <a href="#" className={Classes.Link}>
            API
          </a>
        </Animated>
      </div>
    </header>
  );
};

export default header;
