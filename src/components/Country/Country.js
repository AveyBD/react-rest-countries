import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <img src={props.flags.png} alt={props.name.common} srcSet="" />
            <h2>{props.name.common}</h2>
            <p>Population: {props.population}</p>
            {console.log(props)}
        </div>
    );
};

export default Country;