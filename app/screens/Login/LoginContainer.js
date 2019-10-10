import React, { Component } from 'react';
import LoginView from './LoginView';
import { connect } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <LoginView {...this.props} />;
    }
}

function mapStateToProps() {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        onLogin: (email, password) => dispatch(loginActions.requestLogin(email, password))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
