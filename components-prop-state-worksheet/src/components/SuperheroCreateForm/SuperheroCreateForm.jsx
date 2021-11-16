import React, {Component} from 'react';
import './SuperheroCreateForm.css'

class SuperheroCreateForm extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
                superheroId: null,
                name: "",
                primaryAbility: "",
                secondarAbility: "",
        };
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: this.props.superheroes.length + 1,
            [name]: event.target.name,
            [name]: event.target.primaryAbility,
            [name]: event.target.secondarAbility 
        });
    };

    handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
    };
    
    render() {
        return (
            <form>
                <lable>
                    Name:<input name="name" type="text" value={this.state.name}onChange={this.handleInputChange} />
                </lable>
                <lable>
                    Primary Ability:<input name="primaryAbility" type="text" value={this.state.primaryAbility}onChange={this.handleInputChange} />
                </lable>
                <lable>
                    Secondary Ability:<input name="secondarAbility" type="text" value={this.state.secondarAbility}onChange={this.handleInputChange} />
                </lable>
            </form>
        )
    }
}

export default SuperheroCreateForm;