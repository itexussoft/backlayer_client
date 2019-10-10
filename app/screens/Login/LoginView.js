import React, { Component } from 'react';
import { 
    Form,
    Item,
    Text,
    Input,
    Button,
    Container,
    Thumbnail } from 'native-base';
import images from '../../config/images';

import styles from './styles';
import PropTypes from 'prop-types';

class LoginView extends Component {
    constructor(prop) {
        super(prop);
    
        this.onClick = this.onClick.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        
        this.state = {
            email: '',
            password: ''
        }
    }

    handleEmailChange = (email) => {
        this.setState({email});
    }

    handlePasswordChange = (pass) => {
        this.setState({password: pass});
    }
    
    onClick = () => {
        this.props.onLogin(this.state.email, this.state.password);
    }

    render() {
        return (
            <Container style={styles.container}>
                <Thumbnail square source={images.icons.logo} style={styles.logo}/>
                <Form>
                    <Item rounded style={styles.login_input}>
                        <Input 
                            placeholder="Email" 
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            type={'default'}
                            tag="Email"
                            autoCapitalize="none"
                            returnKeyType="next"
                            onChangeText={this.handleEmailChange}
                        />
                    </Item>
                    <Item rounded style={styles.login_input}>
                        <Input 
                            placeholder="Password" 
                            textContentType="password"
                            type={'default'}
                            tag="Password"
                            secureTextEntry
                            autoCapitalize="none"
                            returnKeyType="done"
                            onChangeText={this.handlePasswordChange}
                        />
                    </Item>
                    <Text style={styles.login_text}>
                        Forgot
                        <Text style={styles.green_text}> Email </Text>
                        or
                        <Text style={styles.green_text}> Password</Text>
                        ?
                    </Text>
                    <Button 
                        style={styles.login_button}
                        rounded 
                        onPress={this.onClick}
                    >
                        <Text style={styles.centered_text}>Primary</Text>
                    </Button>
                    <Text style={[styles.login_text, {textAlign: 'center'}]}>
                        Don't Have An Account?
                        <Text style={styles.green_text}> Sign Up</Text>
                    </Text>
                </Form>
            </Container>
        );
    }
}

LoginView.propTypes = {
    onLogin: PropTypes.func
};

export default LoginView;
