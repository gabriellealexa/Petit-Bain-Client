import React from 'react';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';

class TopNav extends React.Component {

    render() {
      if (localStorage.token) {
        return <div className="TopNav">
        <Navbar bg="light" expand="lg">
<Navbar.Brand href="/">Petit Bain</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
<Nav.Link href="/">Home</Nav.Link>
<Nav.Link href="/what-is-mutual-aid">What is Mutual Aid?</Nav.Link>
<Nav.Link href="/resources">Mutual Aid Resources</Nav.Link>
<Nav.Link href="/organizers">Groups + Organizers</Nav.Link>
</Nav>
<Nav>
 <Nav.Link href="/hub">User Hub</Nav.Link>
</Nav>
</Navbar.Collapse>
</Navbar>
     </div>
      }
        return (
            <div className="TopNav">
               <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Petit Bain</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/what-is-mutual-aid">What is Mutual Aid?</Nav.Link>
      <Nav.Link href="/resources">Mutual Aid Resources</Nav.Link>
      <Nav.Link href="/organizers">Groups + Organizers</Nav.Link>
    </Nav>
    <Nav>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            </div>
        )
    }

}

export default TopNav;