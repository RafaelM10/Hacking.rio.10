import React from 'react';
import { Container } from 'react-bootstrap';
function Letter({children}) {
  return (
    <Container>
      {children}
      <section className="letter">
        <h1>educar &</h1>
        <h1>empreender</h1>
      </section>
    </Container>
  );
}

export default Letter;
