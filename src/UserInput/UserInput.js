import React from 'react';
import './UserInput.css'
const UserInput=(props)=>
{
     return(
         <div className="UserInput">
         <h1>Student Name</h1>
         <input className="InputText" type="text" onChange={props.changed} value={props.value} />
         </div>
     )
};

export default UserInput;