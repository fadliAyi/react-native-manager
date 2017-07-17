import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
    onEmailChange(text){
        this.props.emailChanged(text);       
    }    

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
     const { email, password } = this.props;
     this.props.loginUser({ email, password });
    }
    
    renderButton(){
      if(this.props.loading){
        return <Spinner />
      }
      return(
      <Button link={this.onButtonPress.bind(this)}>
        Login
      </Button>
      ); 
    }

    render() {
        return(
            <Card>
            <CardSection>
                <Input label= "Email" placeholder="email@email.com"  onChangeText={this.onEmailChange.bind(this)} value= { this.props.email } />
            </CardSection>
                
            <CardSection>
                <Input secureTextEntry label="Password" placeholder="password" onChangeText= { this.onPasswordChange.bind(this) } value = { this.props.password  } />
            </CardSection>

            <CardSection>
              { this.renderButton() }
            </CardSection>
            <Text style= { styles.errorText }>
              { this.props.error.message }
            </Text>
            </Card>    
        );
    }
}

const styles = {
  errorText: {
    fontSize: 15,
    alignSelf: 'center',
    color: 'red'  
  }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
}


export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
