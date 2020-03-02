import React from 'react';
import { Form, Button } from 'react-bootstrap';
import SimpleReactValidator from 'simple-react-validator';
import { authMessages } from '../helpers/validateMessages';


class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            isConfirmedPassword: false,
            isSubmitted: false,
            messageForConfirm: '' 
        }
        this.submitForm = this.submitForm.bind(this);
    }


    submitForm = async e => {
        e.preventDefault();

        this.setState({
            isSubmitted: true,
            messageForConfirm: authMessages.DIFFERENT_PASSWORDS
        });

        if (
            this.validator.allValid() &&
            this.state.isConfirmedPassword &&
            !this.state.isSubmitting
        ) {
            //console.log(this.state);
            await this.props.signUpHandler(this.state);
        } else {
            this.validator.showMessages();
        }
    };

    checkConfirmation = () => {
        if (   /*  1st case: "different password" when they are equal, but too short ;
                    2nd case: when password is "" and submit are clicked - different passwords but they are both empty. 
                    3rd case: passwordConfirmation is well when you start edit form */
            /* this.validator.fieldValid('password') */ /* this.state.password !== "" && */
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

        await this.setState(newState);
        this.checkConfirmation();
    };



    render() {
        return(
            <div className="signUpForm">
                <Form onSubmit={this.submitForm}>
                    <Form.Group controlId='formFirstname'>
                        <Form.Label>Firstname</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter your firstname'
                            name='firstname'
                            onChange={this.setInputValue}
                            isValid={this.validator.fieldValid('firstname')}
                            isInvalid={
                                !this.validator.fieldValid('firstname') &&
                                this.state.isSubmitted
                            }
                        />
                        <Form.Text className='text-danger'>
                            {this.validator.message(
                                'firstname',
                                this.state.firstname,
                                'required|min:2|max:20|alpha'
                            )}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId='formLastname'>
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter your lastname'
                            name='lastname'
                            onChange={this.setInputValue}
                            isValid={this.validator.fieldValid('lastname')}
                            isInvalid={
                                !this.validator.fieldValid('lastname') &&
                                this.state.isSubmitted
                            }
                        />
                        <Form.Text className='text-danger'>
                            {this.validator.message(
                                'lastname',
                                this.state.lastname,
                                'required|min:2|max:20|alpha'
                            )}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId='formUsername'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter your name'
                            name='username'
                            onChange={this.setInputValue}
                            isValid={this.validator.fieldValid('username')}
                            isInvalid={
                                !this.validator.fieldValid('username') &&
                                this.state.isSubmitted
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
                        <Form.Label>Email address</Form.Label>
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
                        <Form.Label>Password</Form.Label>
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
                                'required|min:4'
                            )}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId='formConfirmation'>
                        <Form.Label>Confirm password</Form.Label>
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
                   {/*  <Spinner
                        isLoading={this.props.isLoading}
                        className='ml-3'
                    /> */}
                    <Form.Text className='text-danger' size='lg'>
                        {this.props.validationMessage}
                    </Form.Text>
                </Form>
            </div>   
        )
    }
}

export default SignUp;