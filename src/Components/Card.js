import React from 'react';

const Card = (props) => {
    console.log(props.access)
    return (
        <div>
            <img src={require(props.access).default}/>
            <h3>{props.name}</h3>
        </div>
    );
};

export default Card;