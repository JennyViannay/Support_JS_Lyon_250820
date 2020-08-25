import React from 'react';

const CardUser = (props) => {
    return(
        <div className="container">
            <p>Nom : {props.name} </p>
            <img src={props.image} alt="" className="img-fluid"/>
        </div>
    )
}

export default CardUser;
