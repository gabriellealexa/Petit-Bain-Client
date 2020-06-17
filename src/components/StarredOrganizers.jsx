import React from 'react';
import StarredOrganizer from './StarredOrganizer';


class StarredOrganizers extends React.Component {


    render(){

        const user = this.props.user
        let organizers = [];
        if (user.organizers) {
            organizers = user.organizers
            }

        return (
            <div className="starred-organizers-page">
                <h1>Starred Organizers:</h1>
                <div className="starred-resources">
                { organizers.map(organizer => {
                    return <StarredOrganizer key={organizer.id} user={this.props.user} organizer={organizer} /> })
                }  </div><br />
                <p><a href="http://localhost:3001/organizers">All Organizers</a></p>
            </div>

        )
    }
}

        export default StarredOrganizers;