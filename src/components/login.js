import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaCookieBite } from "react-icons/fa";
import App from "../App";
import { useState } from "react";
import "../styles/styles.scss";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "ADMIN" && password === "0000") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("invalid username or password");
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <App username={username} handleLogout={handleLogout} />
        </div>
      ) : (
        <div className="login-page">
          <section className="login-container">
            <h1 className="admin-title">COOK BOOK</h1>
            <Form className="login-form" onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label className="login-form__label">USERNAME:</Form.Label>
                <Form.Control
                  className="login-form__input"
                  name="username"
                  type="text"
                  id="username"
                  value={username}
                  required
                  onChange={(event) => setUsername(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="login-form__label">PASSWORD:</Form.Label>
                <Form.Control
                  className="login-form__input"
                  name="password"
                  type="password"
                  value={password}
                  required
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>
              <Button className="login-btn mt-3" variant="dark" type="submit">
                LOGIN
                <FaCookieBite className="login-icon" />
              </Button>
            </Form>
            {error && (
              <div className="login-error mb-0">
                {error}
                <p className="mb-0 mt-3">credentials to login:</p>
                <p>login: ADMIN | password: 0000</p>
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

export default Login;
