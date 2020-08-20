import React from 'react';
import Classes from './WeatherCard.module.css';
import Grid from '@material-ui/core/Grid';
import { FaSun } from 'react-icons/fa';

const WeatherCard = () => {
  return (
    <div className={Classes.WeatherCard}>
      <div className={Classes.Title}>
        <h1>Kansas ,US</h1>
        <h3>Thurday 20 August</h3>
      </div>
      <div className={Classes.Wrapper}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <FaSun className={Classes.icon} />
            <div className={Classes.TextWrapper}>
              <h1>28 &deg;</h1>
              <p>Clear Sky</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className={Classes.ExtraDetails}>
              <div className={Classes.Upper}>
                <div className={Classes.TextWrapper}>
                  <h3>29 &deg;</h3>
                  <p>High</p>
                </div>
                <div className={Classes.TextWrapper}>
                  <h3>5.1 mph</h3>
                  <p>Wind</p>
                </div>
                <div className={Classes.TextWrapper}>
                  <h3>5:23</h3>
                  <p>Sunrise</p>
                </div>
              </div>
              <div className={Classes.Upper}>
                <div className={Classes.TextWrapper}>
                  <h3>28 &deg;</h3>
                  <p>Low</p>
                </div>
                <div className={Classes.TextWrapper}>
                  <h3>45 %</h3>
                  <p>Rain</p>
                </div>
                <div className={Classes.TextWrapper}>
                  <h3>6:51</h3>
                  <p>Sunset</p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default WeatherCard;
