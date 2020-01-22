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
  }
 

  render() {
    
    return  (
    <div>
      <Header />
      <div class="main-article">
      <InputLocation onChange={this.handleInputChange}/>
      <WeatherDisplay place={this.state.city}/>
      </div>
    </div>
    );
  }
}
export default WeatherApp;