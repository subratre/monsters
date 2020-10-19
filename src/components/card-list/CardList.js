import React, {Component} from 'react';
import {Card} from '../card/card'
import './cardlist.css'

export const CardList = props => {

    return (

    <div className="cardlist">
            {
                props.monsters.map( monster => 
                    
                    <Card key={monster.id} monster={monster} />
                    
                    )
            }
    </div>
    )

}
    