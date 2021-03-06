import React, {Component} from 'react';
import './App.css';
// import DisplayName from './DisplayName/DisplayName';
// import NameList from './NameList/NameList';
import AlertUser from './AlertUser/AlertUser';
import SuperheroTable from './SuperheroTable/SuperheroTable';
import SuperheroCreateForm from './SuperheroCreateForm/SuperheroCreateForm';

class App extends Component {
  constructor(props) {
    super(props);
    //Exercise 3
    this.state = {
      superheroes : [
        {
          superheroId: 1,
          name: 'Batman',
          primaryAbility: 'Wealthy',
          secondarAbility: 'Rich'
        },
        {
          superheroId: 2,
          name: 'Superman',
          primaryAbility: 'Super strength',
          secondarAbility: 'Fly'
        },
        {
          superheroId: 3,
          name: 'Spiderman',
          primaryAbility: 'Spider senses',
          secondarAbility: 'Shoots web'
        }
      ]
    }
  }
  
  handleClick() {
    alert('devCodeCamp')
  }

  addSuperhero = (newSuperhero) => {
    let newHero = {
      superheroId: this.state.superheroes.length + 1,
      name: newSuperhero.name,
      primaryAbility: newSuperhero.primaryAbility,
      secondarAbility: newSuperhero.secondarAbility
    }
  
    this.setState({
      superheroes: [...this.state.superheroes, newHero]
    }, ()=>console.log(this.state.superheroes));
    
  }

  render() { 
    return ( 
      <div className="container-fluid">
        
        {/* <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} /> */}
        {/* <NameList names={this.state.names} /> */}
        <AlertUser handleClick = {this.handleClick} />
        <SuperheroTable superHeroes = {this.state.superheroes}/>
        <SuperheroCreateForm superheroes = {this.state.superheroes} addSuperhero = {this.addSuperhero}/>
      </div>
     );
  }; 
}

export default App;
