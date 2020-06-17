import React, {useState, useEffect } from 'react';
import TopNav from './components/TopNav'
import Page from './components/Page';
import './App.css';

function App(props) {

    const [user, setUser] = useState({})

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      fetch('http://localhost:3000/auto_login', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        setUser(data)
      })
    }
  }, [])

  const handleLogin = (user) => {
    setUser(user)
  }


  // const handleAuthClick = () => {
  //   const token = localStorage.getItem("token")
  //   fetch(`http://localhost:3000/user_is_authed`, {
  //     headers: {
  //       "Authorization": `Bearer ${token}`
  //     }
  //   })
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  // }

  console.log(user)

  return (

    <div className="App">
     <TopNav />
     <Page user={user} handleLogin={handleLogin} />
    </div>
  );
}

export default App;
