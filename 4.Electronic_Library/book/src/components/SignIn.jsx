import React from 'react';
import { Form, Button } from 'react-bootstrap';
import SimpleReactValidator from 'simple-react-validator';

class SignIn extends React.Component{
  constructor(props) {
      super(props);
      this.validator = new SimpleReactValidator();
      this.state = {
          username: "",
          password: ""
      }
  }

  submitForm = async e => {
    e.preventDefault();

   /*  this.setState({
        isSubmitted: true,
    }); */

    if (
        this.validator.allValid() 
    ) {
        //console.log(this.state);
        await this.props.signInHandler(this.state);
    } else {
        this.validator.showMessages();
    }
};

  setInputValue = async e => {
    const newState = {};
    newState[e.target.name] = e.target.value;

    await this.setState(newState);
};

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
              
                <Button variant='primary' type='submit' className='mb-3'>
                    Login
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