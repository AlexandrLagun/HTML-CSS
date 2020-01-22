import React from 'react';

class Forecast1Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null
    };
  }

  componentWillReceiveProps(newProps) {
    
    let place = newProps.place;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=1e4c421010fe9c56a53328876e017b5c`;

    fetch(URL).then(response => {
      if(response.ok) {
        response.json().then(data => {
          this.setState({ weatherData: data });
        });
      } else {
        console.log('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
      }
    });
/*
    fetch(URL).then(res => res.json()).then(data => {
      this.setState({ weatherData: data });
    }).catch(e => console.log(e));
*/
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.weather[0];
    const imgUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div>
        <h1>
          {weather.main} in {weatherData.name} and  {this.props.place}
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