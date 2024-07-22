import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/theme";

function Register() {
  const { theme } = useContext(ThemeContext);

  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
  });

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegisterData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "firstName":
        if (value.length < 3) {
          setFirstNameError("First Name must be at least 3 characters long");
        } else {
          setFirstNameError("");
        }
        break;
      case "lastName":
        if (value.length < 3) {
          setLastNameError("Last Name must be at least 3 characters long");
        } else {
          setLastNameError("");
        }
        break;
      case "username":
        if (value.length < 3) {
          setUsernameError("Username must be at least 3 characters long");
        } else if (value.length > 10) {
          setUsernameError("Username must be no more than 10 characters long");
        } else {
          setUsernameError("");
        }
        break;
      case "password":
        if (value.length < 6) {
          setPasswordError("Password must be at least 6 characters long");
        } else {
          setPasswordError("");
        }
        break;
      case "email":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          setEmailError("Please provide a valid email address");
        } else {
          setEmailError("");
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setRegisterData({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      email: "",
    });

    event.target.reset();

    setIsSubmitted(true);
  };

  return (
    <section
      className="register-page"
      style={{ backgroundColor: theme === "light" ? "#b4b093" : "#47482f" }}
    >
      <Form
        className="register-page__form"
        onSubmit={handleSubmit}
        method="get"
      >
        <Row className="mb-3">
          <Col>
            <Form.Control
              required
              placeholder="FIRST NAME"
              value={registerData.firstName}
              name="firstName"
              className="register-page__input"
              style={{
                backgroundColor: theme === "light" ? "#47482f" : "#b4b093",
                color: theme === "light" ? "#b4b093" : "#47482f",
              }}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={firstNameError !== ""}
            />
            <Form.Control.Feedback type="invalid">
              {firstNameError || "Please provide Full Name"}
            </Form.Control.Feedback>
          </Col>

          <Col>
            <Form.Control
              required
              placeholder="LAST NAME"
              name="lastName"
              value={registerData.lastName}
              className="register-page__input"
              style={{
                backgroundColor: theme === "light" ? "#47482f" : "#b4b093",
                color: theme === "light" ? "#b4b093" : "#47482f",
              }}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={lastNameError !== ""}
              onSubmit={handleSubmit}
            />
            <Form.Control.Feedback type="invalid">
              {lastNameError || "Please provide a Last Name"}
            </Form.Control.Feedback>
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
                required
                id="inlineFormInputGroup"
                name="username"
                value={registerData.username}
                placeholder="USERNAME"
                className="register-page__input username-input"
                style={{
                  backgroundColor: theme === "light" ? "#47482f" : "#b4b093",
                  color: theme === "light" ? "#b4b093" : "#47482f",
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={usernameError !== ""}
              />
              <Form.Control.Feedback type="invalid">
                {usernameError || "Please enter an username"}
              </Form.Control.Feedback>
            </InputGroup>
          </Col>
          <Col>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                required
                value={registerData.password}
                type="password"
                name="password"
                placeholder="PASSWORD"
                className="register-page__input"
                style={{
                  backgroundColor: theme === "light" ? "#47482f" : "#b4b093",
                  color: theme === "light" ? "#b4b093" : "#47482f",
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={passwordError !== ""}
              />
              <Form.Control.Feedback type="invalid">
                {passwordError || "Please provide a password"}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3 mt-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control
              required
              type="email"
              name="email"
              value={registerData.email}
              placeholder="ENTER EMAIL"
              className="register-page__input"
              style={{
                backgroundColor: theme === "light" ? "#47482f" : "#b4b093",
                color: theme === "light" ? "#b4b093" : "#47482f",
              }}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={emailError !== ""}
            />
            <Form.Control.Feedback type="invalid">
              {emailError || "Please provide an email address"}
            </Form.Control.Feedback>
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
          <Row>
            <button
              type="submit"
              className="register-page__btn register-page__input"
              style={{
                backgroundColor: theme === "light" ? "#47482f" : "#b4b093",
                color: theme === "light" ? "#b4b093" : "#47482f",
              }}
            >
              REGISTER
            </button>
          </Row>
        </Row>
        {isSubmitted && (
          <p className="registration-confirm">REGISTRATION SUCCESSFUL</p>
        )}
      </Form>
    </section>
  );
}

export default Register;
