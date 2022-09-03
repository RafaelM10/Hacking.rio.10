import { Card, Col, Container, Row } from "react-bootstrap";
import surf from "../../assets/surf.jpg";

const Diretrizes = () => {
  return (
    <Container>
      <Row className="ctd">
        <Col>
          <img className="img-fluid" src={surf} alt="aula de surf" />
        </Col>
        <Col className="card-container">
          <Card
           border="dark"
          >
            <Card.Body>
              <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
           border="dark"
          >
            <Card.Body>
              <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Diretrizes;
