import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";

function Register() {
  return (
    <section className="register-page">
      <Form>
        <Row className="mb-4">
          <Col>
            <Form.Control placeholder="FIRST NAME" />
          </Col>
          <Col>
            <Form.Control placeholder="LAST NAME" />
          </Col>
        </Row>

        <Row className="mb-2">
          <Col>
            <InputGroup>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control id="inlineFormInputGroup" placeholder="USERNAME" />
            </InputGroup>
          </Col>
          <Col>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="password" placeholder="PASSWORD" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control type="email" placeholder="ENTER EMAIL" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-2" controlId="formGridAddress1">
          <Form.Control placeholder="ADDRESS" />
        </Form.Group>

        <Row className="mb-4">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Select defaultValue="COUNTRY">
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
            <Form.Control placeholder="CITY" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Control placeholder="ZIP" />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          REGISTER
        </Button>
      </Form>
    </section>
  );
}

export default Register;
