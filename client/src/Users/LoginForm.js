// LoginForm.js
import { useHistory } from "react-router";
import React, { useState, useContext } from 'react';
import { CurrentUser } from "../contexts/CurrentUser"

const LoginForm = ({ onLoginSubmit, toggleForm }) => {
  const history = useHistory()

  const { setCurrentUser } = useContext(CurrentUser)

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  
  const [ setErrorMessage] = useState(null)
  
  async function handleSubmit (e) {
    e.preventDefault();
        const response = await fetch(`http://localhost:5000/authentication/`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
          });

          const data = await response.json()

          if (response.status === 200) {
              setCurrentUser(data.user)
              history.push(`/`)
          } else {
              setErrorMessage(data.message)
          }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
