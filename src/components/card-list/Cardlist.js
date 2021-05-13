import React from 'react';
import './Cardlist.css';
import Card from '../card/Card';

const Cardlist = (props) => {
    return (
        <div className="card-list">
        {props.monsters.map(monster=>(
         <Card key={monster.id} monster={monster} />
     ))}
        </div>
    )
}

export default Cardlist;

