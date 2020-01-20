import React from 'react';
import Header from './Header';
import WeatherDisplayForecast from './WeatherDisplayForecast';
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
      city: "Minsk"
    };
  }


  render() {
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
    const forecast = (daysCount === 1) ? (<Forecast1Day />) : (<Forecast5Days />);
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

      <WeatherDisplayForecast days={daysCount} />
      {forecast}
      
    </div>
    );
  }
}
export default WeatherApp;

