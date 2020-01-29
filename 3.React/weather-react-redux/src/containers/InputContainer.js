import { connect } from "react-redux";
//import { bindActionCreators } from "redux";

import InputLocation from "../components/InputLocation";
import { addCity } from "../actions/actionCreators";

const mapStateToProps = state => {
  return {city: state.inputReducer.city };
};

/*const mapDispatchToProps = dispatch => {
  return { generateColor: bindActionCreators(getResultColor, dispatch) };
};*/

const mapDispatchToProps = {
  changeCity: addCity
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputLocation);