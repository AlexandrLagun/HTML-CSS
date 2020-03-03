import React from 'react';
import { Form, Button } from 'react-bootstrap';
import SimpleReactValidator from 'simple-react-validator';

class SignIn extends React.Component{
  constructor(props) {
      super(props);
      this.validator = new SimpleReactValidator();
      this.state = {
          username: "",
          email: "",
          password: ""
      }
      this.submitForm = this.submitForm.bind(this);
  }


  render() {
    return(
        <div className="signInForm">
            <Form onSubmit={this.submitForm}>
                <Form.Group controlId='formUsername'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter your username'
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
                            'required|min:3|max:15|alpha_num_dash_space'
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
               
                <Form.Text className='text-danger' size='lg'>
                    {this.props.validationMessage}
                </Form.Text>
            </Form>
        </div>   
    )
}


}


export default SignIn;