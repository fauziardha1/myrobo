import React from 'react'
import Card from './Card'

export default function CardList({robots}) {
    // if(1){
    //     throw new Error('not good');
    // }
    return (
        robots.map(robot=><Card key={robot.id} robot={robot} />)
    )
}
