import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

import "../styles/styles.scss";
import RecipesPage from "./RecipesPage";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "admin" && password === "0000") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <Button onClick={handleLogout}>LOGOUT</Button>
          <RecipesPage />
        </div>
      ) : (
        <section className="login-container">
          <h1 className="admin-title">ADMIN PANEL</h1>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>username</Form.Label>
              <Form.Control
                className="login-input"
                name="username"
                type="text"
                id="username"
                value={username}
                placeholder="enter username"
                required
                onChange={(event) => setUsername(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>password</Form.Label>
              <Form.Control
                className="login-input"
                name="password"
                type="password"
                value={password}
                required
                placeholder="enter password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="remember me" />
            </Form.Group>
            <Button variant="dark" type="submit">
              login
            </Button>
            {error && <div>{error}</div>}
          </Form>
        </section>
      )}
    </div>
  );
}

export default Login;
