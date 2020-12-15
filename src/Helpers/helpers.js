const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(0);

const findTime = (unixNum) => {
  let date = new Date(unixNum * 1000);
  let meridian = "";
  let hours = parseInt(date.getHours());
  if (hours >= 0 && hours < 12) {
    meridian = "am";
  } else {
    meridian = "pm";
    hours = hours - 12;
  }
  let minutes = parseInt(date.getMinutes());
  if (minutes === 60) {
    minutes = "00";
  }
  if (hours === 24 || hours === 0) {
    hours = "00";
  }
  return `${hours}:${minutes} ${meridian}`;
};

const findDay = (unixNum) => {
  let date = new Date(unixNum * 1000);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[date.getDay()];
};
const findDate = (unixNum) => {
  let date = new Date(unixNum * 1000);
  console.log(date.getMonth());
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[date.getMonth()] + " " + date.getDate();
};

export { capitalize, kelvinToCelsius, findTime, findDay, findDate };
