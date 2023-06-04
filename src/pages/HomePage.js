import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Clock, CloudLightningRain, CloudSun, FileWordFill, Globe, Map, MapFill, MenuApp, Moon, PinMap, SignIntersection } from "react-bootstrap-icons";




function HomePage() {

  useEffect(() => {
    document.title = 'Weather and Prayer times!';
  }, []);


  return (
    <div className="Alger text-center flex">
      <div><Link style={{textDecoration: 'none'}} to="/Blida"><div className="half"> WEATHER<CloudSun /></div></Link>
      </div>
      <div class="vr"></div>
      <div><Link style={{textDecoration: 'none'}} to="/Asr"><div className="half"> PRAYER TIME<Moon /></div></Link>
      </div>
      <div class="vr"></div>
      <div><Link style={{textDecoration: 'none'}} to="/Mapp"><div className="half"> MAP<Globe /></div></Link></div>
    </div>
  );

}

export default HomePage;
