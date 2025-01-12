import React from 'react';
import './App.css';
import Monitoramento from './components/Monitoramento';
import Header from './components/Header';
import SlideMarcas from './components/SlideMarcas';
import Because from './components/Because';

const App = ()=> {
  return (
    <>
      <div style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtzzE50TSw-_9QkR9ZMeZ6A68fLMvpqDPk4g&usqp=CAU);" }}>
        <Header />
        <Monitoramento />
        <SlideMarcas />
        <Because />
      </div>
    </>
  );
}

export default App;