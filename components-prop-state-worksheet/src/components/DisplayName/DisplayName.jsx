import React from 'react';
import './DisplayName.css';

const DisplayName = (props) => {
    return (
        <h1 className="displayName">{props.firstName} {props.lastName}</h1>
    )
}

export default DisplayName;