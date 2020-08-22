import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
const ForeCastCard = (props) => {
  return (
    <div>
      <Card>
        <CardMedia
          style={{ height: 0, paddingTop: '60.25%' }}
          image={props.data.imgUrl}
        />
        <CardContent>
          <h3>
            {props.data.date} , {props.data.day}
          </h3>
          <p>
            <b>{props.data.time}</b>
          </p>
          <Divider light />
          <p>
            <b>Max :</b>
            {props.data.tempMax} &deg;
          </p>
          <p>
            <b>Min :</b>
            {props.data.tempMin} &deg;
          </p>
          <p style={{ textAlign: 'center' }}>{props.data.main}</p>
          <Divider light />
        </CardContent>
      </Card>
    </div>
  );
};

export default ForeCastCard;
