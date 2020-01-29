import { connect } from "react-redux";

import InputLocation from "../components/InputLocation";
import { addCity } from "../actions/actionCreators";

const mapStateToProps = state => {
  return {city: state.inputReducer.city };
};

const mapDispatchToProps = {
  changeCity: addCity
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputLocation);