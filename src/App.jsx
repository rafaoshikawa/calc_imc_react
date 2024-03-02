import { useState } from "react";

import "./Components/global.css";

import Calc from "./Components/Calculadora";
import Sobre from "./Components/Sobre";
import Footer from "./Components/footer";

function App() {
  return (
    <>
      <header className="container">
        <h1>Calculadora IMC</h1>
      </header>
      <Calc />
      <Sobre />
      <Footer />
    </>
  );
}

export default App;
