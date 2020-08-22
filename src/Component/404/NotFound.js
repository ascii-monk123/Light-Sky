import React, { Component } from 'react';
import './NotFound.css';
import broken from './images/imbroken.gif';
import Spinner from '../UI/Spinner/Spinner';

class NotFound extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/');
    }, 2000);
  }
  render() {
    return (
      <div className="page-container" style={{ textAlign: 'center' }}>
        <div className="bg"></div>
        <h1 className="title" style={{ fontSize: '100px', color: 'black' }}>
          404
        </h1>
        <p>Whoops !! An error happened</p>
        <Spinner />
        <p>Please Wait, Going back.......</p>
      </div>
    );
  }
}

export default NotFound;
