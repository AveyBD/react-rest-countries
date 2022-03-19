import React from 'react';
import './Country.css'

const Country = (props) => {
    const{name, flags, population, region} = props;
    return (
        <div className='country'>
            <img src={flags.png} alt={name.common} srcSet="" />
            <h2>{name.common}</h2>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            {console.log(props)}
        </div>
    );
};

export default Country;