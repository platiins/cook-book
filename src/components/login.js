import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "../styles/styles.scss"; 

function Login() {
  return (
    <section className="login-container">
      <h1 className="admin-title">ADMIN PANEL</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>username</Form.Label>
          <Form.Control
            className="login-input"
            name="username"
            type="text"
            id="username"
            placeholder="enter username"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>password</Form.Label>
          <Form.Control
            className="login-input"
            name="password"
            type="password"
            required
            placeholder="enter password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="remember me" />
        </Form.Group>
        <Button variant="dark" type="submit">
          login
        </Button>
      </Form>
    </section>
  );
}

export default Login;
