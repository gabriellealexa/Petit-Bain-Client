import React from 'react';
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class UserInfo extends React.Component {

    handleLogout = () => {
        localStorage.clear();
        this.props.history.push('/')
        window.location.reload()
        }

    render(){
        return (
            <div className="user-info">

                <p> <b>username:</b> @{ this.props.user.username } </p>
                <p><img style={{width: '150px'}} src={ this.props.user.avatar} alt="avatar" /></p>
                <NavLink to="/personal-info" exact><Button variant="pb">Edit Personal Information</Button></NavLink> { } <Button variant="pb" onClick={() => this.handleLogout()}>Log Out</Button> { }

            </div>
        )
    }
}

        export default withRouter(UserInfo);