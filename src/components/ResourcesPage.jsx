import React from 'react';
import Scope from './Scope';
import AboutResources from './AboutResources';


class ResourcesPage extends React.Component {

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
            <div className="info-group">
                <h1>Mutual Aid Resources</h1>
        <p>{ this.state.resources.map(scopeObj => {
           return <Scope scopeObj={scopeObj} />
        })}</p>
            </div>
        )
    }
}

export default ResourcesPage;