import React from 'react';

class Forecast1Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() { 
    const weatherData = this.props.data;
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
        <p>Wind Speed: {(weatherData.wind.speed*1.6/3.6).toFixed(2)} m/s</p>
        <p>Pressure: {weatherData.main.pressure} GPa</p>
        <p>Humidity: {weatherData.main.humidity} %</p>
      </div>
    );
  }

}

export default Forecast1Day;

