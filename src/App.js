import React, { useState } from "react";
import "./App.css";

function App() {
  const [altura, setAltura] = useState();
  const [peso, setPeso] = useState();
  const [mesagem, setMensagem] = useState();

  const calulo = () => {
    const imc = peso / (altura * altura);
    if (imc < 18.5) {
      setMensagem(`Magreza, seu IMC é: ${imc.toFixed(2)}`);
    } else if (imc >= 18.5 && imc < 24.9) {
      setMensagem(`Normal, seu IMC é: ${imc.toFixed(2)}`);
    } else if (imc >= 24.9 && imc < 30) {
      setMensagem(`Sobrepeso, seu IMC é: ${imc.toFixed(2)}`);
    } else if (imc > 30) {
      setMensagem(`Obesidade, seu IMC é: ${imc.toFixed(2)}`);
    }

    setPeso("");
    setAltura("");
  };

  return (
    <div className="app">
      <h1>Claculadora IMC</h1>
      <h4>Vamos calcular seu IMC!</h4>

      <form className="input-area">
        <label for="altura">Altura:</label>
        <input
          type="number"
          placeholder="Digite sua altura, ex: 1.70"
          id="altura"
          value={altura}
          onChange={(e) => {
            setAltura(e.target.value);
          }}
        />
      </form>
      <form className="input-area">
        <label for="peso">Peso:</label>
        <input
          type="number"
          placeholder="Digite seu peso, ex: 80"
          id="peso"
          value={peso}
          onChange={(e) => {
            setPeso(e.target.value);
          }}
        />
      </form>

      <button onClick={calulo}>Calcular</button>

      <span>
        <b>Seu resultado:</b> {mesagem}.
      </span>
    </div>
  );
}

export default App;
