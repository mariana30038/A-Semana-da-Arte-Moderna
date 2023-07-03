import React from "react";
import "./button.css";


function button () {

    const mudarCor = () => {

    const num1 = Math.floor(Math.random() = 255)
    const num2 = Math.floor(Math.random() = 255)
    const num3 = Math.floor(Math.random() = 255)
    const btn = document.getElementById("btn")
    btn.style.backgroundColor = `rbg(${num1},${num2},${num3} )`
    };

  return (
    <div>
    <button id="btn" onClick = {mudaCor}> 
    Muda Cor
    </button>
    </div>

  );
}

export default button;