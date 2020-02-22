import React, { Component } from 'react';
import { Required, Input, Button } from "../../components/Utils/Utils";
import AuthApiService from '../../services/auth-api-service';

export default class RegisterForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => {
          
        }
      }
    
      state = { error: null }
     
      handleSubmit = ev => {
        ev.preventDefault()
        const { full_name, user_name, password } = ev.target
    
      this.setState({ error: null })
             AuthApiService.postUser({
               user_name: user_name.value,
               password: password.value,
               full_name: full_name.value,
             })
               .then(user => {
        full_name.value = ''
        user_name.value = ''
        password.value = ''
        this.props.onRegistrationSuccess() 
      })
             .catch(res => {
               this.setState({ error: res.error })
             })
      }

    render(){
        const { error } = this.state
        return (
           <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
            <div className='fullName'>
                <label htmlFor='registerForm_full_name'>
                    Full name <Required />
                </label>
                <Input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </Input> 
        </div>
        <div className='userName'>
                <label htmlFor='registerForm_full_name'>
                    Username <Required />
                </label> 
                <Input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </Input> 
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
        </div>
        <Button type='submit'>
          Register
        </Button>
        </form>
        )
    }
}