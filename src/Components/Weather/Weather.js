import React, { useState, useEffect } from "react";
import './weather.css';

const Weather = () => {
    const initialValue = {
        "coord": {
        "lon": 78.6,
        "lat": 27.1
        },
        "weather": [
        {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
        }
        ],
        "base": "stations",
        "main": {
        "temp": 289.34,
        "feels_like": 288.22,
        "temp_min": 289.34,
        "temp_max": 289.34,
        "pressure": 1008,
        "humidity": 46,
        "sea_level": 1008,
        "grnd_level": 989
        },
        "visibility": 10000,
        "wind": {
        "speed": 3.1,
        "deg": 313,
        "gust": 4.11
        },
        "clouds": {
        "all": 0
        },
        "dt": 1645374488,
        "sys": {
        "country": "IN",
        "sunrise": 1645319915,
        "sunset": 1645360829
        },
        "timezone": 19800,
        "id": 1256529,
        "name": "Shikohabad",
        "cod": 200
        };
      const [values, setvalues] = useState(initialValue);
      const [city, setcity] = useState("shikohabad");
      const fetchData = async () => {
        try{await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f67e06214338ecffed62287f89b7c9c1`).then(res => res.json()).then(result => {
          setvalues(result)
          console.log(result);
        })}
        catch(err){
          console.log("error to fetch"+"err");
        }    
      }
      useEffect(()=>{
       fetchData()}
      ,[city])
    
      const handleSubmit = () => {
        const searchField = document.getElementById("searchInput").value;
        console.log(searchField);
        setcity(searchField);
      };
  return (
    <div className="container mt-2 mb-2">
      <div className="card mx-auto shadow p-3 bg-body">
        <div className="text-center">
          <h2> Weather APP</h2>
        </div>
        
          <div className="input-group mb-3">
            <input
              placeholder="Search City"
              type="text"
              id="searchInput"
              className="form-control mx-5"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <p
            className="card-text"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button onClick={handleSubmit}  className="btn btn-primary">
              Search City
            </button>
          </p>

        <div className="card-body">
          <p className="card-text text-center">
            <h2 className="card-title">{values ? values.name : ""}</h2>
          </p>

          <p className="card-text">
            <strong>Latitude</strong> :{" "}
            {values.coord.lat ? values.coord.lat : "No data"} |{" "}
            <strong>Longitude</strong> :{" "}
            {values.coord.lon ? values.coord.lon : "No data"} |{" "}
            <strong>Country</strong> :{" "}
            {values.sys.country ? values.sys.country : "No data"}
          </p>
          <p className="card-text">
            <strong>Date</strong> :
            {values.sys.sunrise
              ? new Date(values.sys.sunrise * 1000).toUTCString().slice(0, 16)
              : "No data"}{" "}
            |<strong> Sunrise</strong> :
            {values.sys.sunrise
              ? new Date(values.sys.sunrise * 1000)
                  .toLocaleString()
                  .slice(-9, -3) + " AM "
              : "No data"}
            | <strong>Sunset</strong> :
            {values.sys.sunset
              ? new Date(values.sys.sunset * 1000)
                  .toLocaleString()
                  .slice(-9, -3) + " PM"
              : "No data"}
          </p>
          <p className="card-text">
            <strong>Weather</strong> : {values.weather[0].main} ({" "}
            {values.weather[0].description
              ? values.weather[0].description
              : "No data"}{" "}
            ) | <strong>Clouds</strong>:{" "}
            {values.clouds.all ? values.clouds.all + " %" : "No data"}
          </p>
          <p className="card-text">
            <strong> Wind Speed</strong> :{" "}
            {values.wind.speed ? values.wind.speed + " mil/hr" : "No data"} |{" "}
            <strong> Wind Direction</strong> :{" "}
            {values.wind.deg ? values.wind.deg + " Deg" : "No data"} |{" "}
            <strong> Wind Gust</strong> :{" "}
            {values.wind.gust ? values.wind.gust + " meter/sec" : "No data"}
          </p>
          <p className="card-text">
            <strong>Temprature</strong> :{" "}
            {values.main.temp
              ? (values.main.temp - 273).toString().slice(0, 5) + " °C"
              : "No data"}{" "}
            | <strong>Min.Temp</strong> :{" "}
            {values.main.temp_min
              ? (values.main.temp_min - 273).toString().slice(0, 5) + " °C"
              : "No data"}{" "}
            | <strong>Max.Temp</strong> :{" "}
            {values.main.temp_max
              ? (values.main.temp_max - 273).toString().slice(0, 5) + " °C"
              : "No data"}
          </p>
          <p className="card-text">
            <strong>Humidity</strong> :{" "}
            {values.main.humidity ? values.main.humidity + " %" : "No data"} |
            <strong> Pressure</strong> :{" "}
            {values.main.pressure ? values.main.pressure + " hPa" : "No data"}
          </p>
          <p className="card-text">
            <strong>Sea Level</strong> :{" "}
            {values.main.sea_level ? values.main.sea_level + " hPa" : "No data"}{" "}
            | <strong>Ground Level</strong> :{" "}
            {values.main.grnd_level
              ? values.main.grnd_level + " hPa"
              : "No data"}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Weather