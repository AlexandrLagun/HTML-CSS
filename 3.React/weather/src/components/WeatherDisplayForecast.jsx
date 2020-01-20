import React from 'react';

class WeatherDisplayForecast extends React.Component{
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }

 // componentDidMount() {
 //   const days = this.props.days;

  //}

render() {
return <div>{this.props.days}</div>
}


}


export default WeatherDisplayForecast;