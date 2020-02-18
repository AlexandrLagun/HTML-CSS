import { connect } from 'react-redux';
import userActions from '../actions/userActions';
import SignUpForm from '../components/SignUpForm'

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  handleSignUp: userActions 
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);