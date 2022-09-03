import React from 'react';
import { Container } from 'react-bootstrap';
function Letter({children}) {
  return (
    <Container>
      {children}
      <section className="letter">
        <h1>FAVELA</h1>
        <h1>RADICAL</h1>
      </section>
    </Container>
  );
}

export default Letter;
