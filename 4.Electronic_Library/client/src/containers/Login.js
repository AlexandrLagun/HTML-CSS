import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authActions } from '../actions/userActions';
import SimpleReactValidator from 'simple-react-validator';
import { Redirect } from 'react-router-dom';
import Spinner from './Common/Spinner';
import { googleClientId } from '../config';
import GoogleLogin from 'react-google-login';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
    }

    state = {
        email: '',
        password: '',
        isSubmitted: false,
        token: ''
    };





}
