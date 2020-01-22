import React from 'react';
import Header from './Header';
import InputLocation from './InputLocation';
import WeatherDisplay from './WeatherDisplay';
import '../styles/WeatherApp.css';


class WeatherApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
     city: ""
    };
    this.handleInputChange=this.handleInputChange.bind(this);
  }


  handleInputChange(val){
    this.setState({city: val})
   

  }

  render() {
     
    const city = this.state.city;
    
    return  (
    <div>
      <Header />
      <div className="main-article">
      <InputLocation onChange={this.handleInputChange}/>
      <WeatherDisplay place={city}/>
      </div>
    </div>
    );
  }
}
export default WeatherApp;