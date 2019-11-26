import React from 'react';
import './Person.css';

const person = (props) =>{
    return (
        <div className="Person">
            <p onClick={props.onclick}>Hi I am {props.name} and I am {props.age} year old</p>
            <p>{props.children}</p>
            <input type="text" 
            onChange={props.onchange}
            value={props.name}    
            />
        </div>
    )
}
export default person;