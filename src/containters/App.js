import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll   from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import {robots} from '../robots'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            search: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(data=>{this.setState({robots: data})})
            .catch(err=>{
                console.log(err)
                this.setState({robots:robots})
            })
    }

    SearchBoxChange = event =>{
         this.setState({search: event.target.value})
    }


    render() {
        const {robots,search} = this.state;
        const filteredRobots = robots.filter(robot=>
             robot.name.toLowerCase().includes(search.toLowerCase()))
        return (
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <SearchBox  searchBoxChange={this.SearchBoxChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>  
        )
    }
}
