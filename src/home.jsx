import React from 'react';
import { FaArrowRight, FaArrowLeft, FaBluetooth } from "react-icons/fa";
import './homestyle.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';



// aqui vai os IMPORTS das Imagems;
import logo from './img/logo.png';
import nikeAzul from './img/nikeAzul.png';
import nikeVermelho from './img/nikeVermelho.png';


function Home() {

  const tenis = [nikeVermelho, nikeAzul];
  const [indexe, setIndex] = useState(0)
  // const [mudarCor, setMudarCor] = useState(false);
  const [direction, setDirection] = useState(1);
  const color = ['red', 'blue'];



  // funções para mudar o tenis e a cor de fundo;
  function left() {
    setDirection(-1);

    setIndex((prev) => (prev === 0 ? tenis.length - 1 : prev - 1));

    

  }

  // função para mudar o tenis para direita e a cor de fundo;
  function right() {
    setDirection(1);

    setIndex((prev) => (prev === tenis.length - 1 ? 0 : prev + 1));

   
  }

  
  
  return (
    <motion.div
  className="container"
  animate={{ backgroundColor: color[indexe] }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
    
    
    >
      <header className='header'>
        <ul className='containerList'>
          <li className='list'>home</li>
          <li className='list'>about us</li>
          <li className='list'>products</li>
        </ul>
      </header>


      <div className='main'>
        <img src={logo} alt="Logo Nike" className='logo' />
        <div className='products'>
          <h2>Nike</h2>
          <p>air max</p>
          <AnimatePresence mode="wait">
            <motion.img
              key={indexe}
              src={tenis[indexe]}
              alt="tenis"
              c className="tenis-anim"
              initial={{ x: direction * -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction * 200, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </AnimatePresence>


        </div>
        <p className='price'>R$ 299,99</p>



      </div>
      <div className='container-buttons'>
        <button className='Button' onClick={left}><FaArrowLeft /></button>
        <button className='Button' onClick={right} ><FaArrowRight /></button>
      </div>






    </motion.div> 
  );
}




export default Home;