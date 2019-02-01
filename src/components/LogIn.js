import React, {Component} from 'react'
import { Label, input, Classes} from "@blueprintjs/core";
import { FormErrors } from './FormErrors';

import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

	const LogIn = (props) => {
	  return(
		<div>
		  <h1> Login </h1>

		  <form onSubmit={props.handleSubmit}>
		  <FormErrors formErrors={props.formErrors} />
		  <Label htmlFor="username">Username</Label>
    	  
		  <input type="email" required name="email"
            placeholder="Email"
            value={props.email}
            onChange={props.handleUserInput}  />
        <br></br><br></br>
 
		  <Label htmlFor="password">Password</Label>
		  <input type="password" className="form-control" name="password"
            placeholder="Password"
            value={props.password}
            onChange={props.handleUserInput}  /><br></br><br></br>

		  <button type="button" disabled={!props.formValid} onClick={props.handleSubmit}>Login</button>
		  </form>
		</div>

	  	);
	}


export default LogIn