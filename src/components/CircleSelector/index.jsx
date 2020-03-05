import React, { useEffect } from 'react';
import './style.css';

const CircleSelector = ({handleChange, selected}) => {
    const handleClick = (e) => {
        document.getElementById(selected).classList.remove('selected');
        document.getElementById(selected).innerHTML = `Select Circle ${selected}`;
        handleChange(e.target.id);
    }
    useEffect(()=>{
        document.getElementById(selected)
        .classList.add('selected');
        document.getElementById(selected)
        .innerHTML = `Circle ${selected} selected`;
    })
    return (
        <div className="CircleSelector">
            <button id="1" onClick={handleClick} className="">Select Circle 1</button>
            <button id="2" onClick={handleClick} className="">Select Circle 2</button>
            <button id="3" onClick={handleClick} className="">Select Circle 3</button>
            <button id="4" onClick={handleClick} className="">Select Circle 4</button>
        </div>
    )
}

export default CircleSelector;