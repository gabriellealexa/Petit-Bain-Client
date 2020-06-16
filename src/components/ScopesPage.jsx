import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Resource from './Resource'


class ScopePage extends React.Component {

    constructor(){
        super()
        this.state={
            resources: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/scopes')
        .then(resp => resp.json())
        .then(resourcesObj => {
            this.setState({
                resources: resourcesObj
            })
            console.log(this.state.resources)
        })
    }

    render(){
        return (
            <div className="resource-page">
                <h1>Resource Library</h1>
                <p>Browse by Location:</p>
        <p>{ this.state.resources.map(scopeObj => {
           return <Resource scopeObj={scopeObj} />
        })}</p>
            </div>
        )
    }
}

export default ScopePage;