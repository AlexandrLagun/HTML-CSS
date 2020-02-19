import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authActions } from '../actions/userActions';
import SimpleReactValidator from 'simple-react-validator';
//import { Redirect } from 'react-router-dom';
import { authMessages } from '../helpers/validateMessages';
import Spinner from '../components/Spinner';


class RegistrationForm extends React.Component {

  constructor(props) {
      super(props);
      this.validator = new SimpleReactValidator();
      this.state = {
        email: '',
        username: '',
        password: '',
        passwordConfirmation: '',
        isConfirmedPassword: false,
        isSubmitting: false,
        messageForConfirm: ''
    };
  }

  

  submitForm = async e => {
    e.preventDefault();

    this.setState({
        isSubmitting: true,
        messageForConfirm: authMessages.DIFFERENT_PASSWORDS
    });

    if (
        this.validator.allValid() &&
        this.state.isConfirmedPassword &&
        !this.state.isSubmitting
    ) {
        const { email, password, username } = this.state;

        await this.props.registerUser({
            email,
            password,
            username
        });
    } else {
        this.validator.showMessages();
    }
  };

  checkPasswordConfirmation = () => {
    if (
        this.validator.fieldValid('password') &&
        this.state.password === this.state.passwordConfirmation
    ) {
        this.setState({ isConfirmedPassword: true, messageForConfirm: '' });
    } else {
        this.setState({
            isConfirmedPassword: false
        });
    }
  };

  setInputValue = async e => {
    const newState = {};
    newState[e.target.name] = e.target.value;

    await this.setState(...this.state, newState);
    this.checkPasswordConfirmation();
  };





  render() {
    /* if (this.props.token) {
        return <Redirect to='/' />;
    } */
    return (
        <div>
            <Form onSubmit={this.submitForm}>
                <Form.Group controlId='formUsername'>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter your username'
                        name='username'
                        onChange={this.setInputValue}
                        isValid={this.validator.fieldValid('username')}
                        isInvalid={
                            !this.validator.fieldValid('username') &&
                            this.state.isSubmitting
                        }
                    />
                    <Form.Text className='text-danger'>
                        {this.validator.message(
                            'username',
                            this.state.username,
                            'required|min:3|max:30|alpha_num_dash_space'
                        )}
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId='formEmail'>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        placeholder='Enter your email'
                        value={this.state.email}
                        onChange={this.setInputValue}
                        name='email'
                        isValid={this.validator.fieldValid('email')}
                        isInvalid={
                            !this.validator.fieldValid('email') &&
                            this.state.isSubmitted
                        }
                    />
                    <Form.Text className='text-danger'>
                        {this.validator.message(
                            'email',
                            this.state.email,
                            'required|email'
                        )}
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId='formPassword'>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter your password'
                        name='password'
                        onChange={this.setInputValue}
                        isValid={this.validator.fieldValid('password')}
                        isInvalid={
                            !this.validator.fieldValid('password') &&
                            this.state.isSubmitted
                        }
                    />
                    <Form.Text className='text-danger'>
                        {this.validator.message(
                            'password',
                            this.state.password,
                            'required|min:3'
                        )}
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId='formConfirmation'>
                    <Form.Label>Confirm password:</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder={'Confirm your password'}
                        name='passwordConfirmation'
                        onChange={this.setInputValue}
                        isValid={this.state.isConfirmedPassword}
                        isInvalid={
                            !this.state.isConfirmedPassword &&
                            this.state.isSubmitted
                        }
                    />
                    <Form.Text className='text-danger'>
                        {this.state.isConfirmedPassword &&
                        this.state.isSubmitted
                            ? ''
                            : this.state.messageForConfirm}
                    </Form.Text>
                </Form.Group>

                <Button variant='primary' type='submit' className='mb-3'>
                    Register
                </Button>
               { <Spinner
                    isLoading={this.props.isLoading}
                    className='ml-3'
                /> }
                <Form.Text className='text-danger' size='lg'>
                    {this.props.validationMessage}
                </Form.Text>
            </Form>
        </div>
    );
  }
}



const mapStateToProps = state => {
    return {
        validationMessage: state.app.message,
        user: state.user,
        isLoading: state.app.isLoading,
        token: state.user.token
    };
};
const mapDispatchToProps = dispatch => {
    return {
        registerUser: bindActionCreators(authActions.register, dispatch)
    };
};

const connectedRegisterPanel = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationForm);

export { connectedRegisterPanel as RegistrationForm };

 