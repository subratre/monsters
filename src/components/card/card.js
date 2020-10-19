import React from 'react'

export const Card = props => {

    return (

        <div>
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
            <h2>{ props.monster.name}</h2>
            <h4>{ props.monster.email}</h4>
            
            </div>
    )
}