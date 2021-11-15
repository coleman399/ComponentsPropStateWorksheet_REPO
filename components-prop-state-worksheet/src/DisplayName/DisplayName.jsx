import React from "react";

class DisplayName extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <h1>this.state.firstName this.state.last</h1>
        );
    }
}