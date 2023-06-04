import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Clock } from "react-bootstrap-icons";






const URL = `https://api.open-meteo.com/v1/forecast?latitude=36.73&longitude=3.09&hourly=temperature_2m,precipitation_probability&daily=sunrise,sunset&current_weather=true&timezone=auto`;

function Blida() {

  const [sunset, setsunset] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
     const result = await fetch(URL)
     result.json().then(json=>{
      setsunset(json.daily.sunset[0].split('T')[1]);     })
     
     }
     
    fetchData();
  }, []);


  const [sunrise, setsunrise] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
     const result = await fetch(URL)
     result.json().then(json=>{
      setsunrise(json.daily.sunrise[0].split('T')[1]);
     })
     
     }
     
    fetchData();
  }, []);



  useEffect(() => {
    document.title = 'Weather in Alger';
  }, []);

  const [wind, setwind] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
     const result = await fetch(URL)
     result.json().then(json=>{
       setwind(json.current_weather.windspeed);
     })
     
     }
     
    fetchData();
  }, []);


 const [temp, setTemp] = useState(0)

 useEffect(() => {
   const fetchData = async () => {
    const result = await fetch(URL)
    result.json().then(json=>{
      setTemp(json.current_weather.temperature);
    })
    
    }
    
   fetchData();
 }, []);

 const [winddir, setwinddir] = useState(0)

 useEffect(() => {
   const fetchData = async () => {
    const result = await fetch(URL)
    result.json().then(json=>{
      setwinddir(json.current_weather.winddirection);
    })
    
    }
    
   fetchData();
 }, []);

  return (
    <div className="Alger text-center">
      <div className="header display-1"><b>ALGER</b> WEATHER NOW</div>

      <div className="place" >
        <Link to="/Blida">ALGER</Link>
        <Link to="/Tizi">TIZI-OUZOU</Link>
        <Link to="/Alger">BOUMERDES</Link>
        <Link to="/">HOME</Link>

      </div>

      <div className="bi bi-arrow-right"></div> 
      <hr class="hr" />
      <div className="sets d-flex flex-column">
        <div className="p-2">temperature: {temp}C</div>
        <div className="p-2">wind speed: {wind}km/h</div>
        <div className="p-2">wind direction: {winddir}°</div>
        <div className="p-2">sunrise: {sunrise}<Clock /></div>
        <div className="p-2">sunset: {sunset}<Clock /></div>
      </div>
    </div>
  );
}

export default Blida;
