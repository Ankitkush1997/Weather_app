import React, { useState, useEffect } from "react";
import "./Search.css";
// import axios from 'axios'

export default function Searchweather() {
  const [search, setSearch] = useState("");
  const [temp, setTemp] = useState(null);
  const [temp_min, setTemp_min] = useState(null);
  const [temp_max, setTemp_max] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [description, setDescription] = useState(null);

  const fetchWeather = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=2ccfa3e8c6df4cf87cb347b12924ed75`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    setTemp((data.main.temp - 273.15).toFixed(2));
    setTemp_min((data.main.temp_min - 273.15).toFixed(2));
    setTemp_max((data.main.temp_max - 273.15).toFixed(2));
    setSearch(data.name);
    setHumidity(data.main.humidity);
    setDescription(data.weather[0].description);
  };

  // use effect isliye remove kiya hai jisse re-render wali prblm solve ho.
  // useEffect(() => {
  //     fetchWeather();

  // }, [search]);

  //  date

  let d = new Date();
  let date = d.getDate();
  let year = d.getFullYear();
  let month = d.toLocaleString("default", { month: "long" });
  let day = d.toLocaleString("default", { weekday: "long" });

  // time

  let time = d.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // handleclick function tab run hoga jab user city ka name submit krega.basically form submit krega

  let handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather();
  };

  return (
    <div>
      <div className="container row justify-content-center ">
        <div className="box">
          <div className="input">
            <div className="input-group mb-3">
              {/* ye phle use kiya tha  */}

              {/* <input
                                className="form-control"
                                placeholder="Enter City"
                                value={search}
                                onChange={(event) => { setSearch(event.target.value) }}
                            /> */}

              {/* new form */}

              <form onSubmit={handleSubmit}>
                <label>
                  <input
                    type="text"
                    value={search}
                    placeholder="Enter City"
                    onChange={(event) => {
                      setSearch(event.target.value);
                    }}
                  />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>

          <div className="card bg-dark bg-opacity-50 py-3">
            <div className="card-body">
              <h5 className="card-title text-white">{search}</h5>
              <p className="date">
                {day}, {month} {date}, {year}
              </p>
              <p className="time">{time}</p>
              <h4 className="temp">{temp ? temp : null}&deg;C</h4>
              <h3 className="description">{description}</h3>
              <h3 className="humidity">Humidity: {humidity}%</h3>
              <h6 className="minmax ">
                Min: {temp_min}&deg;C | Max:{temp_max}&deg;C
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
