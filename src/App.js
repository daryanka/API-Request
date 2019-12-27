import React, { useState } from 'react';
import Axios from "axios";
import _ from "lodash";
import moment from "moment";

const App = () => {
  const [state , setState] = useState({});

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const apiKey = "3500b52091a4b44d88536f2eb08f5304";
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`).then(res => {
      setState(res.data)
    }).catch(err => {
      console.log(err)
    })
  };

  return (
    <div className="cont">
      <h1 className={"title"}>Weather API</h1>

      <div>
        {_.isEmpty(state) ? "Loading weather information": (
          <>
            <p>The temperature is currently {state.main.temp} but feels more like {state.main.feels_like}</p>
            <p>Currently the weather would best be described as {state.weather[0].description}</p>
            <p>With highs of {state.main.temp_max}</p>
            <p>And lows of {state.main.temp_min}</p>
            <p>The sun will set at {moment.unix(state.sys.sunrise).format("h:mm:ss a")}</p>
            <p>And will rise at {moment.unix(state.sys.sunset).format("h:mm:ss a")}</p>
          </>
        )}
      </div>

      {/*<div className={"divider"}/>*/}
      {/*<p>Enter city name</p>*/}
      {/*<input className={"input"}/>*/}
    </div>
  );
}

export default App;
