import React, { useEffect } from 'react';
import './style.css';

const Circles = ({selected}) => {
    useEffect(()=>{
        document.getElementById(`Circle${selected}`).classList.add('selected')
    })
    return(
        <div class="Circles">
            <div id="Circle1" className="">1</div>
            <div id="Circle2" className="">2</div>
            <div id="Circle3" className="">3</div>
            <div id="Circle4" className="">4</div>
        </div>
    )
}

export default Circles;