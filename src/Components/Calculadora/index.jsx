import InputMask from "react-input-mask";
import React, { useState } from "react";
import "./calc.css";

function Calc() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState(null);
  const [descricao, setDescricao] = useState("");

  const formatarPeso = (valor) => {
    // Adapte a lógica de formatação conforme necessário
    // Aqui estamos removendo quaisquer caracteres não numéricos e limitando a um dígito antes do ponto decimal
    return valor.replace(/[^\d.]/g, "").slice(0, 4);
  };

  const calcularIMC = () => {
    // Verifique se a altura e o peso são números válidos
    if (!altura || !peso || isNaN(altura) || isNaN(peso)) {
      alert("Por favor, insira valores válidos para altura e peso.");
      return;
    }

    // Converter a altura e peso para números do tipo float
    const alturaNumero = parseFloat(altura);
    const pesoNumero = parseFloat(peso);

    // calcula o IMC
    const imc = pesoNumero / Math.pow(alturaNumero, 2);

    // Atualiza o estado do resultado
    setResultado(`Seu IMC: ${imc.toFixed(2)}`);
    if (imc < 18.5) {
      setDescricao("Peso abaixo do normal.");
    } else if (imc >= 18.5 && imc <= 24.9) {
      setDescricao("Peso considerado na faixa saudável.");
    } else if (imc >= 25 && imc <= 29.9) {
      setDescricao("Peso na faixa do sobrepeso.");
    } else if (imc >= 30 && imc <= 34.9) {
      setDescricao("Peso na faixa da obesidade grau 1.");
    } else if (imc >= 35 && imc <= 39.9) {
      setDescricao("Peso na faixa da obesidade grau 2.");
    } else {
      setDescricao("Peso na faixa da obesidade grau 3.");
    }
  };

  return (
    <div className="container">
      <div className="content">
        <label className="contentLabel">Altura</label>
        <InputMask
          mask="9.99"
          className="contentInput"
          type="text"
          placeholder="1.63"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <label className="contentLabel">
          Peso:{" "}
          <p className="instruction">
            utilize o " . " para as gramas (Opcional)
          </p>
          <p className="instruction">Ex: 89.35</p>
        </label>
        <input
          className="contentInput"
          type="text"
          placeholder="69.2"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <button className="contentButton" onClick={calcularIMC}>
          CALCULAR IMC
        </button>
        <div className="result">
          <p className="resultText">{resultado}</p>
          <p className="description">{descricao}</p>
        </div>
      </div>
    </div>
  );
}

export default Calc;
