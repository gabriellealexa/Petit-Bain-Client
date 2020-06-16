import React from 'react';
import Organizer from './Organizer';

class OrganizersPage extends React.Component {

    constructor(){
        super()
        this.state = {
            organizers: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/organizers')
        .then(resp => resp.json())
        .then(organizersObj => {
            this.setState({
                organizers: organizersObj
            })
            console.log(this.state.organizers)
        })
    }

    render(){
        return (
            <div className="organizers-page">
                <br />
                 <h1>Group/Organizers Directory</h1>
                 <br />
                 <div className="organizer-cards">
                 { this.state.organizers.map(organizerObj => {
           return <Organizer organizer={organizerObj} />
            })}
            </div>
            </div>
        )
    }
}

export default OrganizersPage;