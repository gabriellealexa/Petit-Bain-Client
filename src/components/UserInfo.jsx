import React from 'react';
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom'


class UserInfo extends React.Component {


    render(){
        return (
            <div className="user-info">

                <p> <b>username:</b> @{ this.props.user.username } </p>
                <p><img src={ this.props.user.avatar}/></p>
                <NavLink to="/personal-info" exact><Button variant="pb">Edit Personal Information</Button></NavLink>
            </div>
        )
    }
}

        export default UserInfo;