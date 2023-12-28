import { useHistory } from "react-router";
import React, { useState, useContext } from 'react';
import { CurrentUser } from "../contexts/CurrentUser";

const LoginForm = ({ onLoginSubmit, toggleForm }) => {
  const history = useHistory();
  const { setCurrentUser } = useContext(CurrentUser);
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/authentication/`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    const data = await response.json();

    if (response.status === 200) {
      setCurrentUser(data.user);
      history.push(`/`);
    } else {
      setErrorMessage(data.message);
    }
  }

  return (
    <main>
      <div className="form-container">
          <form onSubmit={handleSubmit}>
          <h1>Login</h1>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
          {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
        </div>
    </main>
  );
};

export default LoginForm;

