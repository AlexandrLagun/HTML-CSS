import React from 'react';
import CardWeather from './CardWeather';

class Forecast5Days extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      mainData: [],
      city: ""
    };
    this.formatForecast = this.formatForecast.bind(this);
  }

  componentWillReceiveProps(newProps) {
    
    let place = newProps.place;
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${place}&units=metric&appid=1e4c421010fe9c56a53328876e017b5c`;

  /*
    fetch(URL).then(res =>   res.json()).then(data => {
      const daily5forecast = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
      this.setState({ weatherData: daily5forecast, mainData: data });
    });*/  
   
    fetch(URL).then(response => {
      if(response.ok) {
        response.json().then(data => {
          const daily5forecast = data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
          this.setState({ weatherData: daily5forecast, mainData: data });
        });
      } else {
        console.log('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
      }
    });
  }

  formatForecast() {
    return this.state.weatherData.map((day, index) => <CardWeather day={day} data={this.state.mainData} key={index}/>);
  }


  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading</div>;
    return (
    <div>
  
      <div>
      {this.formatForecast()}
      </div>
    </div>
    );
  }
}

export default Forecast5Days;
