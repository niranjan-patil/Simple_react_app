import React, {Component} from 'react'
import { FormErrors } from './FormErrors';
import { BrowserRouter, Link } from 'react-router-dom'
import { Label, input, Classes} from "@blueprintjs/core";
import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
class LogIn extends Component {
	constructor() {
    super();
    this.state={
    	email:"",
    	password:"",
    	formErrors: {email: '', password: ''},
      	emailValid: false,
      	passwordValid: false,
      	formValid: false,
      	response:""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
   /* this.changeHandler = this.changeHandler.bind(this)*/
  }
handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 3;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

/*changeHandler(event){
    	console.log('in change handlet')
    	const {name,value} =  event.target
    	this.setState({
    		[name]:value
    	})
}*/
  handleSubmit(event) {
  	
         
    var formData = new FormData();
    formData.append('email', this.state.email);
    formData.append('password', this.state.password)
    fetch('http://localhost:3002/authenticate', {
      method: 'POST',
      body: formData,
    }).then(response => response.json())
	.then(response => console.log('Success:', JSON.stringify(response)))
	/*.then(if(!response.hasOwnProperty('error')
			console.log('Failure')
		)
		)
	//this.setState({response: })

	/*if(!response..hasOwnProperty('error')) {

	}*/
  }
	render()
	{
	  return(
		<div>
		  <h1> Login </h1>

		  <form onSubmit={this.handleSubmit}>
		  <FormErrors formErrors={this.state.formErrors} />
		  <Label htmlFor="username">Username</Label>
    	  
		  <input type="email" required name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        <br></br><br></br>
 
		  <Label htmlFor="password">Password</Label>
		  <input type="password" className="form-control" name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput}  /><br></br><br></br>

		  <button type="button" disabled={!this.state.formValid} onClick={this.handleSubmit}>Login</button>
		  </form>
		</div>
		<BrowserRouter>
		
		</BrowserRouter>

	  	);
	}
}

export default LogIn