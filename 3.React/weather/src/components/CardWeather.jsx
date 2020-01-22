import React from 'react';
import '../styles/CardWeather.css';


class CardWeather extends React.Component {
  // Props: day, key(index)

  render() {    
    const ms = this.props.day.dt * 1000;
    const date = new Date(ms);
    const weekday = date.toLocaleString("en", {weekday: "long"});
    const month = date.toLocaleString("en", {month: "long"});
    const dat = date.getDate().toString();


        const imgUrl = "http://openweathermap.org/img/w/" + this.props.day.weather[0].icon + ".png";

    return (
      <div className="cardWeather">
        <h2>{weekday} - {month} {dat}</h2>
        <h3>{this.props.day.weather[0].main} in {this.props.data.city.name}
        <img src={imgUrl} alt={ this.props.day.weather[0].icon.description} />
        </h3>
        
        <p>Temperature: {Math.round(this.props.day.main.temp)} °C</p>
        <p>Humidity: {this.props.day.main.humidity} %</p>
        <p>Pressure: {this.props.day.main.pressure} GPa</p>
        <div>
          {this.props.day.weather[0].description}
        </div>
      </div>
    );
  }
}

export default CardWeather

