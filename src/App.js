import React, { useState } from 'react';
import Axios from "axios";
import _ from "lodash";
import moment from "moment";

const App = () => {
  const [state , setState] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [cityName, setCityName] = useState("");

  React.useEffect(() => {
    // fetchData();
  }, []);

  const fetchData = () => {
    setError("");
    const apiKey = "3500b52091a4b44d88536f2eb08f5304";
    setLoading(true);
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
      .then(res => {
        setState(res.data);
        setLoading(false);
      }).catch(err => {
        setError("Unable to get weather information");
        console.log(err)
        setLoading(false);
      });

    // Axios.post("url", data, {headers: {
    //     "Content-Type": "multipart/form-data",
    //     "Content-Type": "application/json",
    //   }})
  };

  const displayInformation = () => {
    if (error) {
      return <p className={"danger"}>{error}</p>
    }

    if (_.isEmpty(state) && loading) {
      return <p>Loading weather information</p>
    }

    if (_.isEmpty(state)) {
      return false
    }

    return (
      <>
        <p>The temperature is currently {state.main.temp}&#8451; but feels more like {state.main.feels_like}&#8451;</p>
        <p>Currently the weather would best be described as {state.weather[0].description}</p>
        <p>With highs of {state.main.temp_max}&#8451;</p>
        <p>And lows of {state.main.temp_min}&#8451;</p>
        <p>The sun will set at {moment.unix(state.sys.sunrise).format("h:mm:ss a")}</p>
        <p>And will rise at {moment.unix(state.sys.sunset).format("h:mm:ss a")}</p>

        <div className={"divider"}/>
      </>
    )
  };

  return (
    <div className="cont">
      <h1 className={"title"}>Weather API</h1>

      <div>
        {displayInformation()}
      </div>

      <p>Enter city name</p>
      <input onChange={event => setCityName(event.target.value)} className={"input"}/>
      <button className={"button"} onClick={fetchData}>Get Weather</button>
    </div>
  );
}

export default App;
