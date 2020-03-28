import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props){
        super(props);
        this.state ={}
    }

    render() {
        const { id,name,username,email } = this.props.robot
        return (
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img src={`https://robohash.org/${id}?set=set4&size=200x200`} alt={name+"'s image"}/>
                <div >
                    <h2> {username} </h2>
                    <p> {email} </p>
                </div>
            </div>
        )
    }
}
