import React from 'react';

const CharCard = (props) => {
    return ( 
        <div className="char-card-container">
        {props.charList.map(item => {
            console.log(item.name);
            return (
                <div className={`char-card ${item.name}`} key={item.name}>
                <h2>{item.name}</h2>
                <p>BORN: {item.birth_year}</p>
                </div>
            );
        })}
        </div>
     )
}
 
export default CharCard;