import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authActions } from '../actions/userActions';
import SimpleReactValidator from 'simple-react-validator';
//import { Redirect } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { googleClientId } from '../config';
import GoogleLogin from 'react-google-login';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            email: '',
            password: '',
            isSubmitted: false,
        };
    }


    submitForm = async e => {
        e.preventDefault();

        this.setState({ isSubmitted: true });

        if (this.validator.allValid() && !this.props.isLoading) {
            const { email, password } = this.state;
            this.props.login({ email, password });
        } else {
            this.validator.showMessages();
        }
    };

    setInputValue = async e => {
        const newState = {};
        newState[e.target.name] = e.target.value;

        await this.setState(...this.state, newState);
        this.forceUpdate();
    };

    handleSuccess = async res => {
        await this.props.googleAuth({ access_token: res.accessToken });
    };
    handleFailure = res => {
        console.error(res);
    };



    render() {
        /* if (this.props.token) {
            return <Redirect to='/' />;
        } */
        return (
            <div>
                <Form onSubmit={this.submitForm}>
                    <Form.Group controlId='formEmail'>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            placeholder='Enter your email address'
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

                    <GoogleLogin
                        clientId={googleClientId}
                        buttonText='Google'
                        onSuccess={this.handleSuccess}
                        onFailure={this.handleFailure}
                        cookiePolicy={'single_host_origin'}
                    />

                    <Button
                        variant='primary'
                        type='submit'
                        className='mb-3 float-right'>
                        Login
                    </Button>
                    <Spinner
                        isLoading={this.props.isLoading}
                        className='ml-3'
                    />
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
        token: state.user.token,
        isLoading: state.app.isLoading
    };
};
const mapDispatchToProps = dispatch => {
    return {
        login: bindActionCreators(authActions.login, dispatch),
        googleAuth: bindActionCreators(authActions.googleAuth, dispatch)
    };
};

const connectedLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export { connectedLogin as Login };