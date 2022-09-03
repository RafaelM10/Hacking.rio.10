import React from 'react';
import Letter from '../../components/home/Letter';
import QuemSomos from '../../components/home/QuemSomos';
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
      <Letter><img className="letterImg" src={seta1} alt="" /></Letter>
      <CardAtividades/>
      <img src={footer} className="img-footer" alt=""/>
      <Footer/>
    </>
  );
}

export default Home;
