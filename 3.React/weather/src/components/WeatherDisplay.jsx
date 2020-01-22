import React from 'react';
import Forecast1Day from './Forecast1Day';
import Forecast5Days from './Forecast5Days';
import '../styles/WeatherDisplay.css';


const FORECASTS = [
  "forecast for 1 day",
  "forecast for 5 days"
   ];

class WeatherDisplay extends React.Component{
  constructor() {
    super();
    this.state = {
      activeForecast: 0
      
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
    const forecast = (daysCount === 1) ? (<Forecast1Day place={this.props.place} />) : (<Forecast5Days place={this.props.place} />);

    return  (
    <div>
      
      <div>
        {FORECASTS.map((forecast, index) => (
          <button class="changeButton"
            key={index}
            onClick={() => {this.setState({activeForecast: index})}}
          >
              {FORECASTS[index]}
          </button>
        ))}
      </div>
      
      {forecast}
        
    </div>
    );
  }
}
export default WeatherDisplay;

