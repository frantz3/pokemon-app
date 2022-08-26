import React from 'react';
import List from './List';

 function Card({name, image, pokeType}) {
    
    return (
        <li className="Card">
            <h1>{name}</h1>

            <img src={image} alt={name} />

            <p>{pokeType}</p>

        </li>
    )
 }

 export default Card;

