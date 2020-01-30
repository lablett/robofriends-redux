import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    // require key for each component in a loop
                    return <Card
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}/>
                })
            }
        </div>
    );
}

export default CardList;