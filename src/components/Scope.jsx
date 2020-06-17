import React from 'react';
import Resource from './Resource'

class Scope extends React.Component {

    render(){
        return (
            <div className="scopeObj">
            <h1 className="scope-title"> { this.props.scopeObj.title } </h1>
            <div className="scope-cards">
            { this.props.scopeObj.resources.map(resource => {
                return <Resource resource={resource} />
            })
        } </div>
            </div>
        )
    }
} export default Scope;