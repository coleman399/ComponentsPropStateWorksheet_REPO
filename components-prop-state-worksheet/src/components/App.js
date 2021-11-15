import React, {Component} from 'react';
import './App.css';
// import DisplayName from './DisplayName/DisplayName';
import NameList from './NameList/NameList';

class App extends Component {
  constructor(props) {
    super(props);
    //Exercise 2
    this.state = {
    names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
}
  }

  render() { 
    return ( 
      <div className="container-fluid">
        {/* <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} /> */}
        <NameList names={this.state.names} />
      </div>
     );
  }; 
}

export default App;
