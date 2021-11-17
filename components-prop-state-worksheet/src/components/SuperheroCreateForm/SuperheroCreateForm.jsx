import React, {Component} from 'react';
import './SuperheroCreateForm.css'

class SuperheroCreateForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
                superheroId:"",
                name: "",
                primaryAbility: "",
                secondarAbility: "",
        };
    }

    handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addSuperhero(this.state)
        alert(`Superhero Added!`+'\n'+`Superhero Id: ${this.state.superheroId}`+'\n'+`Name: ${this.state.name}`+'\n'+`Primary Ability: ${this.state.primaryAbility}`+'\n'+`Secondary Ability: ${this.state.secondarAbility}`)
    }
    
    render() {
        return (
            <form onSubmit = {(event) => {this.handleSubmit(event)}}>
                <lable>
                    Name:<input name="name" type="text" onChange={this.handleChange} value={this.state.name}/>
                </lable>
                <lable>
                    Primary Ability:<input name="primaryAbility" type="text"onChange={this.handleChange} value={this.state.primaryAbility}/>
                </lable>
                <lable>
                    Secondary Ability:<input name="secondarAbility" type="text"onChange={this.handleChange} value={this.state.secondarAbility}/>
                </lable>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default SuperheroCreateForm;