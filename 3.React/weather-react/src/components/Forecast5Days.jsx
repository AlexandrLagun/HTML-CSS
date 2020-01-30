import React from 'react';
import CardWeather from './CardWeather';

class Forecast5Days extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.formatForecast = this.formatForecast.bind(this);
  }

  formatForecast() {
    return this.props.data.map((day, index) => <CardWeather day={day} data={this.props.main5Days} key={index}/>);
  }

  render() {
    const weatherData = this.props.data;
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


