import React from 'react';

class Forecast1Day extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }

  componentDidMount() {
    
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=minsk"+
    "&units=metric&appid=1e4c421010fe9c56a53328876e017b5c";
    fetch(URL).then(res => res.json()).then(data => {
      this.setState({ weatherData: data });
    });
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.weather[0];
    const imgUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
return (
  <div>
    <h1>
      {weather.main} in {weatherData.name}
      <img src={imgUrl} alt={weatherData.description} />
    </h1>
    <p>Current: {weatherData.main.temp}°</p>
    <p>Feels like: {weatherData.main.feels_like}°</p>
    <p>High: {weatherData.main.temp_max}°</p>
    <p>Low: {weatherData.main.temp_min}°</p>
    <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
    <p>Pressure: {weatherData.main.pressure} GPa</p>
    <p>Humidity: {weatherData.main.humidity} %</p>
  </div>
);
  }

}

export default Forecast1Day;