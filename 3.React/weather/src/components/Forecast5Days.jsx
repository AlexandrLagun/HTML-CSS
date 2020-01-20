import React from 'react';
import CardWeather from './CardWeather';

class Forecast5Days extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: [],
      mainData: [],
    };
    this.formatForecast = this.formatForecast.bind(this);
  }

  componentDidMount() {
    
    const URL = "https://api.openweathermap.org/data/2.5/forecast?q=sharm el sheikh"+
    "&units=metric&appid=1e4c421010fe9c56a53328876e017b5c";
    fetch(URL).then(res => res.json()).then(data => {
      const daily5forecast = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
      this.setState({ weatherData: daily5forecast, mainData: data });
    
    });
  }

  formatForecast() {
    return this.state.weatherData.map((day, index) => <CardWeather day={day} data={this.state.mainData} key={index}/>);
  }


  render() {
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

//<div>
//{this.formatForecast()}
//</div>