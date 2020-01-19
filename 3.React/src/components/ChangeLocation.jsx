import React from 'react';

export default class ChangeLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };
  }

  onChange = (e) => {
    this.setState({ location: e.target.value });
    this.showLocationKey(this.state.location);
    const URL = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=%09BU7iAuJI1B0sFb7ZcfQYYCJNOT3zgG9j&q=minsk`;
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
  };

  /*showLocationKey = (location) => {
      if (location === "") {
 
      }
  } */
 

  render() {
   // const weatherData = this.state.weatherData;
   // const locationKey = weatherData[0].Key;
    return (
      <div className="ChangeLocation">
        <div className="ui category search">
          <form className="ui form">
            <h3 className="ChangeText">Change your location:</h3>
            <br />
            <div className="ui icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search city..."
                value={this.state.term}
                onChange={this.onChange}
              />
            </div>
          </form>
          <p>Location key of the city </p>
        </div>
      </div>
    );
  }
}


/*
const apil = [{"Version":1,"Key":"28580","Type":"City","Rank":20,"LocalizedName":"Minsk","EnglishName":"Minsk",
"PrimaryPostalCode":"","Region":{"ID":"EUR","LocalizedName":"Europe","EnglishName":"Europe"},
"Country":{"ID":"BY","LocalizedName":"Belarus","EnglishName":"Belarus"},
"AdministrativeArea":{"ID":"HM","LocalizedName":"Minsk City","EnglishName":"Minsk City","Level":1,"LocalizedType":"Municipality",
"EnglishType":"Municipality","CountryID":"BY"},
"TimeZone":{"Code":"MSK","Name":"Europe/Minsk","GmtOffset":3.0,"IsDaylightSaving":false,"NextOffsetChange":null},
"GeoPosition":{"Latitude":53.9,"Longitude":27.576,
"Elevation":{"Metric":{"Value":213.0,"Unit":"m","UnitType":5},"Imperial":{"Value":698.0,"Unit":"ft","UnitType":0}}},
"IsAlias":false,"SupplementalAdminAreas":[],
"DataSets":["AirQualityCurrentConditions","AirQualityForecasts","ForecastConfidence"]},

{"Version":1,"Key":"582140","Type":"City","Rank":85,"LocalizedName":"Minsk","EnglishName":"Minsk",
"PrimaryPostalCode":"","Region":{"ID":"ASI","LocalizedName":"Asia","EnglishName":"Asia"},
"Country":{"ID":"RU","LocalizedName":"Russia","EnglishName":"Russia"},
"AdministrativeArea":{"ID":"KYA","LocalizedName":"Krasnoyarsk","EnglishName":"Krasnoyarsk",
"Level":1,"LocalizedType":"Kray","EnglishType":"Kray","CountryID":"RU"},
"TimeZone":{"Code":"KRAT","Name":"Asia/Krasnoyarsk","GmtOffset":7.0,"IsDaylightSaving":false,
"NextOffsetChange":null},"GeoPosition":{"Latitude":57.099,"Longitude":93.334,
"Elevation":{"Metric":{"Value":198.0,"Unit":"m","UnitType":5},"Imperial":{"Value":649.0,"Unit":"ft","UnitType":0}}},
"IsAlias":false,"SupplementalAdminAreas":[{"Level":2,"LocalizedName":"Bolshemurtinsky","EnglishName":"Bolshemurtinsky"}],
"DataSets":["AirQualityCurrentConditions","AirQualityForecasts"]}];
*/
