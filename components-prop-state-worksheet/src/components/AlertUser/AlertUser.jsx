import React from 'react';
import './AlertUser.css';

function AlertUser(props) {
    return <button onClick={props.handleClick}>Click Me</button>
}

export default AlertUser;