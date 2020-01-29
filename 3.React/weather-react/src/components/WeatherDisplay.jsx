import React from 'react';
import Forecast1Day from './Forecast1Day';
import Forecast5Days from './Forecast5Days';
import '../styles/WeatherDisplay.css';


const FORECASTS = [
  "Forecast for 1 day",
  "Forecast for 5 days"
   ];

class WeatherDisplay extends React.Component{
  constructor(props) {
    super(props);
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

    const forecast1Day = <Forecast1Day data={this.props.forecastData1Day} />
    const forecast5Days = <Forecast5Days data={this.props.forecastData5Days} main5Days={this.props.main5DaysData}/>
   
    const forecast = (daysCount === 1) ? forecast1Day : forecast5Days;

    return  (
    <div>
      
      <div>
        {FORECASTS.map((forecast, index) => (
          <button className="changeButton"
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

