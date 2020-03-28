import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false,
            info:''
        }
    }

    componentDidCatch(err,info){
        this.setState({hasError:err,info:info})
    }
    render() {
        const { hasError} = this.state;
        return  hasError ? <h1>Ooops not good!</h1>
            : <div> {this.props.children} </div>;
    }
}
