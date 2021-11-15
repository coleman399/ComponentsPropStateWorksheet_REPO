import React, {Component} from 'react';
import './App.css';
// import DisplayName from './DisplayName/DisplayName';
import NameList from './NameList/NameList';
import AlertUser from './AlertUser/AlertUser';

class App extends Component {
  constructor(props) {
    super(props);
    //Exercise 2
    this.state = {
    names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
    }
  }

  handleClick() {
    alert('devCodeCamp')
  }

  render() { 
    return ( 
      <div className="container-fluid">
        {/* <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} /> */}
        <NameList names={this.state.names} />
        <AlertUser handleClick = {this.handleClick} />
      </div>
     );
  }; 
}

export default App;
