import React from 'react';
import HomeCarousel from './HomeCarousel';
import ResourcesPage from './ResourcesPage';
import OrganizersPage from './OrganizersPage';
import Hub from './Hub'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import LogInForm from './LogInForm';
import EditUserInfo from './EditUserInfo';


class Page extends React.Component {

    render(){
        return (
            <div className="page">
                <Router>
                <Route exact path="/" component={HomeCarousel} />
                <Route exact path="/resources" component={ResourcesPage} />
                <Route exact path="/organizers" component={OrganizersPage} />
                <Route path="/login">
                     <LogInForm handleLogin={this.props.handleLogin} />
                    </Route>
                <Route exact path="/signup">
                    <SignUpForm handleLogin={this.props.handleLogin} />
                    </Route>
                    <Route exact path="/hub">
                        <Hub user={this.props.user} />
                    </Route>
                <Route exact path="/personal-info">
                    <EditUserInfo user={this.props.user} />
                    </Route>
                </Router>
            </div>
        )
    }
}

export default Page;