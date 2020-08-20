import React from 'react';
import Classes from './Button.module.css';

const Button = (props) => {
  return (
    <button className={Classes.Button} onClick={props.clicked}>
      {props.title}
    </button>
  );
};

export default Button;
