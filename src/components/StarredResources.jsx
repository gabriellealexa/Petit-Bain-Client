import React from 'react';
import StarredResource from './StarredResource';


class StarredResources extends React.Component {

    render(){
        
        const user = this.props.user
        let resources = []
        if (user.resources) {
            resources = user.resources 
            }

        return (
            <div className="starred-resources-page">
                <h1>Starred Resources:</h1>
                <div className="starred-resources">
            { resources.map(r => {
                return <StarredResource key={r.id} user={this.props.user} resource={r} />
            }) } </div>
            <br />
                <p><a href="http://localhost:3001/resources">All Resources</a></p>
            </div>
        )
    }
}

        export default StarredResources;