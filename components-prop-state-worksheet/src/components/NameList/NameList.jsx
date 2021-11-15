import React from 'react';
import './NameList.css';

function ListItem(props) {
    return <li>{props.value}</li>
}

function NameList(props) {
    const names = props.names;
    const nameList = names.map((name) => 
        <ListItem key={name} value={name} />
    );
    return (
        <ul>{nameList}</ul>
    );
}
export default NameList;