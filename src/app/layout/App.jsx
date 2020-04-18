import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <h1>Re-events</h1>
        <button className= "ui icon button">
          <i className = "smile icon"></i>
              CSS Button
        </button>
        <Button icon = "smile" content="React Button"/>
      </React.Fragment>
    );
  }
}

export default App;
