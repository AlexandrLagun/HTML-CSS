import { actionTypes } from "./actionTypes";
import axios from 'axios';

export const changeCitySuccess1Days = (data) => {
  return {
    type: actionTypes.CHANGE_SUCCESSFULLY1,
    payload: data
  };
}

export const changeCityFailure1Days = (err) => {
  return {
    type: actionTypes.CHANGE_FAILURE1,
    payload: err
  };
}

export const changeCitySuccess5Days = (data) => {
  return {
    type: actionTypes.CHANGE_SUCCESSFULLY5,
    payload: data
  };
}

export const changeCityFailure5Days = (err) => {
  return {
    type: actionTypes.CHANGE_FAILURE5,
    payload: err
  };
}

export const changeCityStarted = (city) => {
  return {
    type: actionTypes.CHANGE_CITY,
    payload: city
  };
}


export const chooseForecastType = (index) => {
  return {
    type: actionTypes.CHOOSE_FORECAST_TYPE,
    payload: index
  };
}


export const addCity = (city) => {
  return dispatch => {

    dispatch(changeCityStarted(city));

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1e4c421010fe9c56a53328876e017b5c`)
      .then(data => {
        console.log(data);
        dispatch(changeCitySuccess1Days(data.data));
      })
      .catch(err => {
        dispatch(changeCityFailure1Days(err.message));
      });

    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=1e4c421010fe9c56a53328876e017b5c`)
      .then(data => {
        const daily5forecast = data.data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
        dispatch(changeCitySuccess5Days(daily5forecast));
      })
      .catch(err => {
        dispatch(changeCityFailure5Days(err.message));
      });     


  };
};
