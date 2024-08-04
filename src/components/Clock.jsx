import React from 'react';
import { useState, useEffect } from 'react';

const Clock = () => {

        // To get the current time and convert it to the 12 hour format.
  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    const strTime = `${hours}:${minutes} ${ampm}`;
    return strTime;
  };

    //   This sets the time and the useEffect updates it every second.
  const [time, setTime] = useState(formatTime(new Date()));

useEffect(() => {
  const intervalId = setInterval(() => {
    setTime(formatTime(new Date()));
  }, 1000);

  return () => clearInterval(intervalId); // cleanup interval on component unmount
}, []);



  return (
    <div>{time}</div>
  )
}

export default Clock