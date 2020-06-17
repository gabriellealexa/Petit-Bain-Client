import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

function SignUpForm(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [avatar, setAvatar] = useState("")

    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }

  const handleAvatarChange = (evt) => {
    setAvatar(evt.target.value)
    }


    const handleSubmit = (evt) => {
    evt.preventDefault()
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username,
        password,
        avatar
      })
    })
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("token", data.jwt)
      props.handleLogin(data.user)
      console.log(data.user)
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
        <h2>Sign Up</h2>
        <center>Already have an account? <a href="/login">Login here</a>.</center>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
           <Form.Label><b>Username:</b></Form.Label>
           <Form.Control value={username} onChange={handleUsernameChange} type="username" placeholder="Must be a combination of letters and/or numbers. Cannot match any existing users on the site." />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label><b>Password:</b></Form.Label>
            <Form.Control value={password} onChange={handlePasswordChange} type="password" placeholder="Case sensitive." />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
        </Form.Group>

        <Form.Group controlId="formBasicAvatar">
            <Form.Label><b>Avatar:</b></Form.Label>
            <Form.Control value={avatar} onChange={handleAvatarChange} type="avatar" placeholder="Full URL of an image hosted on another site." />
        </Form.Group>

        <center>
          <Button variant="primary" type="submit">
          Submit
          </Button>
          </center>
        </Form>
        </div>
    </div>
  )

}

export default SignUpForm 