import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {withRouter } from 'react-router-dom';

function LogInForm(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }


    const handleSubmit = (evt) => {
    evt.preventDefault()
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("token", data.jwt)
      props.handleLogin(data.user)
      props.history.push('/hub')
    })
    setUsername("")
    setPassword("")
  }

  const formDivStyle = {
      margin: "auto",
      padding: "20px",
      width: "80%"
  }

  return(
    <div style={formDivStyle}>

      <div className="info-group">     
        <h2>Log In</h2>
         <center> Need to make an account? <a href="/signup">Register here</a>.</center>
       <br />
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label><b>Username:</b></Form.Label>
            <Form.Control value={username} onChange={handleUsernameChange} type="username" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label><b>Password:</b></Form.Label>
            <Form.Control value={password} onChange={handlePasswordChange} type="password" placeholder="Password" />
        </Form.Group>
        <center>
        <Button type="submit">Login</Button>
        </center>
        </Form>
    </div>
    </div>
  )

}

export default withRouter(LogInForm); 