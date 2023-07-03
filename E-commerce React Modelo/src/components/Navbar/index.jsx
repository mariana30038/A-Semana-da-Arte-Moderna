import React from 'react';
import './styles.css';

function Navbar() {

  return (
    <div class="navbar">
      <div class="logo">
        <h1>JetShoes</h1>
      </div>
      <ul class="links">
        <li><a href="/">Inicio</a></li>
        <li><a href="sobre">Sobre</a></li>
        <li><a href="carrinho">Carrinho 🛒</a></li>
      </ul>
    </div>
  );
}

export default Navbar;