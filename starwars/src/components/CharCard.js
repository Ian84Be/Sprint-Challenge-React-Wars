import React from 'react';

const CharCard = (props) => {
    return (
        <div className="char-card-container">

            {props.charList.map(item => {

                let homeworldName = '';

                fetch(item.homeworld)
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        homeworldName = data.name;
                        console.log(homeworldName);
                    })
                    .catch(err => {
                        throw new Error(err);
                    });
                
                return (
                    <div className={`char-card ${item.name}`} key={item.name}>
                        <h2>{item.name}</h2>
                        <i className="far fa-eye fa-3x" style={{ color: item.eye_color }}></i>
                        <i className="far fa-eye fa-3x" style={{ color: item.eye_color }}></i>
                        <span>&nbsp;</span>
                        <p>BORN: {item.birth_year}</p>
                        <p>HOMEWORLD: {homeworldName}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default CharCard;