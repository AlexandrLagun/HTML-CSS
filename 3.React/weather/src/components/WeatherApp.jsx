import React from 'react';
import Header from './Header';
import InputLocation from './InputLocation';
import Forecast1Day from './Forecast1Day';
import Forecast5Days from './Forecast5Days';


const FORECASTS = [
  "forecast for 1 day",
  "forecast for 5 days"
   ];

class WeatherApp extends React.Component{
  constructor() {
    super();
    this.state = {
      activeForecast: 0,
      city: "Baranovichi"
    };
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }


  handleLocationChange(location) {
    this.setState({city: location})
  }

  render() {
    const city  = this.state.city;
    const activeForecast = this.state.activeForecast;
    let daysCount = 0;
    switch(activeForecast) {
      case 0: daysCount = 1;
      break;
      case 1: daysCount = 5;
      break;
      default: daysCount = 1;
      break;
    }
    const forecast = (daysCount === 1) ? (<Forecast1Day place={city} />) : (<Forecast5Days place={city} />);

    return  (
    <div>
      <Header />
      <div>
        {FORECASTS.map((forecast, index) => (
          <button
            key={index}
            onClick={() => {this.setState({activeForecast: index})}}
          >
              {FORECASTS[index]}
          </button>
        ))}
      </div>

      <InputLocation days={daysCount} onChange = {this.handleLocationChange} />
      {forecast}
      
    </div>
    );
  }
}
export default WeatherApp;

