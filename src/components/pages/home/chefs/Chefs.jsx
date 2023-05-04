/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Chefs = ({chef}) => {
    const {name} = chef;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Chefs;