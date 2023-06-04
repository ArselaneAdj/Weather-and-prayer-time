import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Clock } from "react-bootstrap-icons";



const URL = `https://api.aladhan.com/v1/timingsByCity/24-05-2023?city=Tizi-ouzou&country=Algeria&method=8`





function Tizipt() {

  //TIME RN
  const current = new Date();
  const time = current.toLocaleTimeString("en-UK");


  useEffect(() => {
    document.title = 'Prayer times in Tizi-ouzou';
  }, []);



  const [fajr, fajrt] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
     const result = await fetch(URL)
     result.json().then(json=>{
      fajrt(json.data.timings.Fajr);     })
     
     }
     
    fetchData();
  }, []);


  const [soubh, soubht] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
     const result = await fetch(URL)
     result.json().then(json=>{
      soubht(json.data.timings.Sunrise);     })
     
     }
     
    fetchData();
  }, []);



  const [dhuhr, dhuhrt] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
     const result = await fetch(URL)
     result.json().then(json=>{
      dhuhrt(json.data.timings.Dhuhr);     })
     
     }
     
    fetchData();
  }, []);



  const [asr, asrt] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
     const result = await fetch(URL)
     result.json().then(json=>{
      asrt(json.data.timings.Asr);     })
     
     }
     
    fetchData();
  }, []);



  const [maghrib, maghribt] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
     const result = await fetch(URL)
     result.json().then(json=>{
      maghribt(json.data.timings.Maghrib);     })
     
     }
     
    fetchData();
  }, []);




  const [isha, ishat] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
     const result = await fetch(URL)
     result.json().then(json=>{
      ishat(json.data.timings.Isha);     })
     
     }
     
    fetchData();
  }, []);




  return (
    <div className="Alger text-center">
      <div className="header display-1"><b>TIZI-OUZOU</b> PRAYER TIMES</div>
      <div className="place" >
        <Link to="/Algerpt">ALGER</Link>
        <Link to="/Tizipt">TIZI-OUZOU</Link>
        <Link to="/Asr">BOUMERDES</Link>
        <Link to="/">HOME</Link>

      </div>

      <div className="bi bi-arrow-right"></div> 
      <hr class="hr" />
      <div className="sets d-flex flex-column">
        <h1 className="time">{time}<Clock /></h1>
        <div className="p-2">fajr: {fajr}<Clock /></div>
        <div className="p-2">soubh: {soubh}<Clock /></div>
        <div className="p-2">dhuhr: {dhuhr}<Clock /></div>
        <div className="p-2">asr: {asr}<Clock /></div>
        <div className="p-2">maghrib: {maghrib}<Clock /></div>
        <div className="p-2">isha: {isha}<Clock /></div>
      </div>
    </div>
  );
}

export default Tizipt;
