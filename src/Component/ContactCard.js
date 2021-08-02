import React from "react";

const CardContact= (props) =>{


    const {id,name , email}= props.contact;
 return(
<div className ="item">
        <div className= "content">
            
            <div className ="Header">{name}</div>
            <div>{email}</div>
            <i className="trash alternate outer icon"  style={{color:"red", marginTop :"7px"}}></i>
        </div>
</div>
 );
}; 

export  default  CardContact;