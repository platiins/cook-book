import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";

function Register() {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className="register-page"
      style={{ backgroundColor: theme === "light" ? "#b4b093" : "#47482f" }}
    >
      <Form className="register-page__form">
        <Row className="mb-3">
          <Col>
            <Form.Control
              placeholder="FIRST NAME"
              className="register-page__input"
              style={{
                backgroundColor: theme === "light" ? "#47482f" : "#b4b093",
                color: theme === "light" ? "#b4b093" : "#47482f",
              }}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="LAST NAME"
              className="register-page__input"
              style={{
                backgroundColor: theme === "light" ? "#47482f" : "#b4b093",
                color: theme === "light" ? "#b4b093" : "#47482f",
              }}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col className="email-input">
            <InputGroup>
              <InputGroup.Text
                className="email-sign"
                style={{
                  backgroundColor: theme === "light" ? "#47482f" : "#b4b093",
                  color: theme === "light" ? "#b4b093" : "#47482f",
                }}
              >
                @
              </InputGroup.Text>
              <Form.Control
                id="inlineFormInputGroup"
                placeholder="USERNAME"
                className="register-page__input"
                style={{
                  backgroundColor: theme === "light" ? "#47482f" : "#b4b093",
                  color: theme === "light" ? "#b4b093" : "#47482f",
                }}
              />
            </InputGroup>
          </Col>
          <Col>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                type="password"
                placeholder="PASSWORD"
                className="register-page__input"
                style={{
                  backgroundColor: theme === "light" ? "#47482f" : "#b4b093",
                  color: theme === "light" ? "#b4b093" : "#47482f",
                }}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3 mt-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control
              type="email"
              placeholder="ENTER EMAIL"
              className="register-page__input"
              style={{
                backgroundColor: theme === "light" ? "#47482f" : "#b4b093",
                color: theme === "light" ? "#b4b093" : "#47482f",
              }}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3 mt-3" controlId="formGridAddress1">
          <Form.Control
            placeholder="ADDRESS"
            className="register-page__input"
            style={{
              backgroundColor: theme === "light" ? "#47482f" : "#b4b093",
              color: theme === "light" ? "#b4b093" : "#47482f",
            }}
          />
        </Form.Group>

        <Row className="mb-3 mt-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Select
              defaultValue="COUNTRY"
              className="register-page__input"
              style={{
                backgroundColor: theme === "light" ? "#47482f" : "#b4b093",
                color: theme === "light" ? "#b4b093" : "#47482f",
              }}
            >
              <option>COUNTRY</option>
              <option>LATVIA</option>
              <option>LITHUANIA</option>
              <option>BULGARIA</option>
              <option>UKRAINE</option>
              <option>USA</option>
              <option>PORTUGAL</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Control
              placeholder="CITY"
              className="register-page__input"
              style={{
                backgroundColor: theme === "light" ? "#47482f" : "#b4b093",
                color: theme === "light" ? "#b4b093" : "#47482f",
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Control
              placeholder="ZIP"
              className="register-page__input"
              style={{
                backgroundColor: theme === "light" ? "#47482f" : "#b4b093",
                color: theme === "light" ? "#b4b093" : "#47482f",
              }}
            />
          </Form.Group>
        </Row>
        <Row className="btn-row mt-4">
          <Button
            type="submit"
            className="register-page__btn register-page__input"
            style={{
              backgroundColor: theme === "light" ? "#47482f" : "#b4b093",
              color: theme === "light" ? "#b4b093" : "#47482f",
            }}
          >
            REGISTER
          </Button>
        </Row>
      </Form>
    </section>
  );
}

export default Register;
