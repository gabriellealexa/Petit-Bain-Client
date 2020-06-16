import React from 'react';
import StarredResources from './StarredResources';
import StarredOrganizers from './StarredOrganizers'
import UserInfo from './UserInfo'
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';


class Hub extends React.Component {

    handleLogout = () => {
        localStorage.clear();
        this.props.history.push('/')
        }


    render(){
        return (
            <div className="hub">
               <UserInfo user={this.props.user} />
                <StarredResources user={this.props.user} />
                <StarredOrganizers user={this.props.user} />
                <Button variant="pb" onClick={() => this.handleLogout()}>Log Out</Button>
                <br /><br />
            </div>
        )
    }
}

        export default withRouter(Hub);