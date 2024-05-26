import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

import "../styles/styles.scss";
import RecipesPage from "./RecipesPage";
import Navigation from "./Navigation";
import { LuLogOut } from "react-icons/lu";
import { FaCookieBite } from "react-icons/fa";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "foodLover666" && password === "0000") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
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
          <Navigation />
          <Button className="logout-btn" onClick={handleLogout}>
            <LuLogOut />
          </Button>
          <RecipesPage />
        </div>
      ) : (
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
            <Button className="login-btn" variant="dark" type="submit">
              LOGIN
              <FaCookieBite className="login-icon" />
            </Button>
            {error && <div>{error}</div>}
          </Form>
        </section>
      )}
    </div>
  );
}

export default Login;
