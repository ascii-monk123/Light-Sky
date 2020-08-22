import React from 'react';
import Classes from './GetIcons.module.css';
import {
  FaSun,
  FaCloud,
  FaCloudRain,
  FaCloudShowersHeavy,
  FaSnowflake,
  FaSmog,
} from 'react-icons/fa';
import { GiTornado } from 'react-icons/gi';
import { WiSandstorm, WiSmoke, WiDayHaze, WiFog } from 'react-icons/wi';
import { IoIosThunderstorm } from 'react-icons/io';

const ReturnIcon = (props) => {
  const weathterTypes = [
    'clear',
    'clouds',
    'drizzle',
    'rain',
    'thunderstorm',
    'snow',
    'mist',
    'smoke',
    'haze',
    'dust',
    'fog',
    'sand',
    'ash',
    'squall',
    'tornado',
  ];
  const component = [
    <FaSun />,
    <FaCloud />,
    <FaCloudRain />,
    <FaCloudShowersHeavy />,
    <IoIosThunderstorm />,
    <FaSnowflake />,
    <FaSmog />,
    <WiSmoke />,
    <WiDayHaze />,
    <WiSandstorm />,
    <WiFog />,
    <WiSandstorm />,
    <WiSandstorm />,
    <GiTornado />,
    <GiTornado />,
  ];
  let icon = component[0];
  if (weathterTypes.indexOf(props.weather.toLowerCase()) !== -1) {
    icon = component[weathterTypes.indexOf(props.weather.toLowerCase())];
  }
  return <div className={Classes.iconDiv}>{icon}</div>;
};

export default ReturnIcon;
