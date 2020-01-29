import { connect } from "react-redux";
import {chooseForecastType} from "../actions/actionCreators"
//import { bindActionCreators } from "redux";

import WeatherDisplay from "../components/WeatherDisplay";

//import { changeForecast } from "../actions/actionCreators";

const mapStateToProps = state => {
  return {forecast1Day: state.inputReducer.forecast1Day,
          forecast5Days: state.inputReducer.forecast5Days,
          city: state.inputReducer.city,
          activeForecast : state.inputReducer.activeForecast,
        };
};

/*const mapDispatchToProps = dispatch => {
  return { generateColor: bindActionCreators(getResultColor, dispatch) };
};*/

const mapDispatchToProps = {
  changeActiveForecast: chooseForecastType
};

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(WeatherDisplay);