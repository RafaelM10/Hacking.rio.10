import React from 'react';
import Diretrizes from '../../components/home/Diretrizes';
import Doacoes from '../../components/home/Doacoes';
import Letter from '../../components/home/Letter';
import QuemSomos from '../../components/home/QuemSomos';
import seta3 from "../../assets/ENFEITESETA.svg";
import seta4 from "../../assets/SETA3.svg";
import footer from "../../assets/footer.svg";
import seta1 from '../../assets/ENFEITESETA_01.svg'
import Footer from '../../components/Footer';
import CardAtividades from '../../components/home/CardAtividades';
import NavBar from '../../components/navBar';
import Header from '../../components/Header';

function Home() {
  return (
    <>
      <NavBar/>
      <Header/>
      <QuemSomos/>
      <Letter><img className="letterImg" src={seta1} alt="enfeite de seta" /></Letter>
      <Diretrizes/>
      <Doacoes/>
      <section>
        <img src={seta3} className="imgSeta3" alt="enfeita seta grande"/>
        <h1 className="title-atividades">Atividades</h1>
        <img src={seta4} className="imgSeta4" alt="enfeita seta pequena"/>
        <img src={seta4} className="imgSeta5" alt="enfeita seta pequena"/>    
      </section>
      <CardAtividades/>
      <img src={footer} className="img-footer" alt="foto da favela do turano"/>
      <Footer/>
    </>
  );
}

export default Home;
