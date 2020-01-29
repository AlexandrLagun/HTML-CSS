import React from 'react';
import Header from './Header';
import InputContainer from '../containers/InputContainer';
import WeatherContainer from '../containers/WeatherContainer';
import '../styles/WeatherApp.css';


const App = () => (
  <>
    <Header />
    <div class="main-article">
      <InputContainer />
      <WeatherContainer />
    </div>
  </>  
)

export default App;