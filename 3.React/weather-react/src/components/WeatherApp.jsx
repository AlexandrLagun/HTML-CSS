import React from 'react';
import Header from './Header';
import InputLocation from './InputLocation';
import WeatherDisplay from './WeatherDisplay';
import '../styles/WeatherApp.css';

class WeatherApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
     city: "Minsk"
    };
    this.handleInputChange=this.handleInputChange.bind(this);
  }

  handleInputChange(val){
    this.setState({city: val})
    
    const URL1 = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=1e4c421010fe9c56a53328876e017b5c`;

    fetch(URL1).then(response => {
      if(response.ok) {
        response.json().then(data => {
          this.setState({ weatherData1day: data });
        });
      } else {
        console.log('Network request for json failed with response ' + response.status + ': ' + response.statusText);
      }
    });

    const URL5 = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&appid=1e4c421010fe9c56a53328876e017b5c`;

    fetch(URL5).then(response => {
      if(response.ok) {
        response.json().then(data => {
          const daily5forecast = data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
          this.setState({ weatherData5days: daily5forecast, mainData5days: data });
        });
      } else {
        console.log('Network request for json failed with response ' + response.status + ': ' + response.statusText);
      }
    });

  }

  render() {
    
    const forecast1DayData = this.state.weatherData1day;
    const forecast5DayData = this.state.weatherData5days;
    const main5DaysData = this.state.mainData5days;

    return  (
    <div>
      <Header />
      <div className="main-article">
      <InputLocation onChange={this.handleInputChange}/>
      <WeatherDisplay forecastData1Day={forecast1DayData} forecastData5Days={forecast5DayData} main5DaysData={main5DaysData}/>
      </div>
    </div>
    );
  }
}
export default WeatherApp;