import React from "react";
import { Container } from "react-bootstrap";

const QuemSomos = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <div  className="heading">
          <h1>Chega perto, mais perto!</h1>
          <Container>
            <p>
              O metaverso 10perto é a plataforma educacional ideal para quem está sempre aprendendo, mas também botando a mão na massa. Todas as semanas contamos com a presença de mentores no
			  palco 10p para mediar um bate-papo sobre vários aspectos do empreendedorismo. Além disso, aqui todos os participantes também têm voz para compartilhar suas experiências boas e ruins, 
			  ensinar de tudo, fazer contatos e fechar negócios. Os elementos interativos do ambiente te convidam a explorar mais profundamente o conteúdo. E o melhor: você não paga nada para 
			  participar! Vem pra perto!
            </p>
            {/* <Button variant="outline-light"size="lg" className="btn-quem">
              VER MAIS
            </Button> */}
          </Container>
        </div>
      </Container>
    </section>
  );
};

export default QuemSomos;
