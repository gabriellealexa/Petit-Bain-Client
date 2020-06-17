import React from 'react';
import StarredResources from './StarredResources';
import StarredOrganizers from './StarredOrganizers';
import UserInfo from './UserInfo';
import LogInForm from './LogInForm'


class Hub extends React.Component {

    render(){

        if(!localStorage.token) {
            return <div className="login">
                <LogInForm handleLogin={this.props.handleLogin} />
            </div>
        }



        return (
            <div className="hub">
               <UserInfo user={this.props.user} />
                <StarredResources user={this.props.user} />
                <StarredOrganizers user={this.props.user} />
                <br /><br />
            </div>
        )
    }
}

        export default Hub;