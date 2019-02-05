import React, {Component} from 'react'

import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import AuthService from './AuthService';
import withAuth from './withAuth';

class Welcome extends Component {
  
  render() {
    return(
    <div>
        
            <h2>Welcome user</h2>
            
   
     </div>
    );
  }
}
export default Welcome;