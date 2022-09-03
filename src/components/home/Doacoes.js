import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import doacoes from "../../assets/doacoes.svg";

const Doacoes = () => {
  return (
    <section className="container-doacoes">
      <Container>
        <Row className="col-doador">
          <Col id="text-doacoes">
            <h1>Lorem Item dolor</h1>
            <p>
              Aliquam nec cursus urna. Nam bibendum dictum urna eget imperdiet.
              Fusce congue ligula massa, at lobortis sem porcottitor ut. Quisque
              pulvinar quis sem eget laoreet. Praesent eget ante et ipsum accumsan
              suscipit. Morbi convallis risus volutpat convallis gravida. Fusce
              libero elit, aliquet ut aliquam a, convallis non sapien. Duis
              laoreet, dui ac porttitor laoreet, leo elit tristique sem, a auctor
              augue dui ac sem. Curabitur vitae sapien at nibh tempus interdum.
              Nullam et metus non sapien aliquet lobortis. Fusce libero elit,
              aliquet ut aliquam a, convallis non sapien. Duis laoreet, dui ac
              porttitor laoreet, leo elit tristique sem, a auctor augue dui ac
              sem. Curabitur vitae sapien at nibh tempus interdum. Nullam et metus
              non sapien aliquet lobortis.
            </p>
          </Col>
          <Col>
            <img className="img-fluid" id="img-doacoes" src={doacoes} alt="doacoes" />
            <Link to="/doacoes">
              <Button variant="outline-light"className="doacoes-button">
                VER MAIS 
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Doacoes;
