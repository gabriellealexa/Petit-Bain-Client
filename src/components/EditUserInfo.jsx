import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UserInfo from './UserInfo';

function EditUserInfo(props) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [bio, setBio] = useState("")
    const [avatar, setAvatar] = useState("")

    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }

    const handleBioChange = (evt) => {
      setBio(evt.target.value)
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
        bio,
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
            <div className="edit-user-info">
                <h1> Edit User Information:</h1>
                <div style={formDivStyle}>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control value={username} onChange={handleUsernameChange} type="username" placeholder="Enter username" />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control value={password} onChange={handlePasswordChange} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
        </Form.Group>

        <Form.Group controlId="formBasicBio">
            <Form.Label>Bio:</Form.Label>
            <Form.Control value={bio} onChange={handleBioChange} type="bio" placeholder="Bio" />
        </Form.Group>

        <Form.Group controlId="formBasicAvatar">
            <Form.Label>Avatar:</Form.Label>
            <Form.Control value={avatar} onChange={handleAvatarChange} type="avatar" placeholder="Avatar" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
          </Button>

        </Form>
    </div>
            </div>
        )
    }
export default EditUserInfo;