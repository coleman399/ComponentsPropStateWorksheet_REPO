import React from 'react';
import './SuperheroTable.css';

function SuperheroTable(props) {
    return (
        <table className="table">
            <tr>
                <th className="col-3">ID</th>
                <th className="col-3">Name</th>
                <th className="col-3">Primary Ability</th>
                <th className="col-3">Secondary Ability</th>
            </tr>
            {props.superHeroes.map((superhero) => {
                return (
                    <tr key={superhero.superheroId}>
                        <td>{superhero.superheroId}</td>
                        <td>{superhero.name}</td>
                        <td>{superhero.primaryAbility}</td>
                        <td>{superhero.secondarAbility}</td>
                    </tr>
                )
            }
            )}
        </table>
    );
}
export default SuperheroTable;