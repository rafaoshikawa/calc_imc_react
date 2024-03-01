import "./sobre.css";

function sobre() {
  return (
    <div className="containerAbout">
      <div className="contentAbout">
        <h2 className="textLarge">O que é o IMC</h2>
        <p className="textSmall">
          O Índice de Massa Corporal (IMC) é uma ferramenta que oferece uma
          visão geral da relação entre peso e altura de uma pessoa. No entanto,
          é crucial compreender que a saúde é influenciada por vários fatores, e
          o IMC é apenas um dos indicadores.
        </p>
      </div>
      <div className="contentAbout">
        <h2 className="textLarge">Interpretação do IMC</h2>
        <p className="textSmall">
          O IMC é classificado em diferentes categorias, cada uma indicando uma
          faixa geral de peso. Lembre-se de que o IMC é apenas uma medida
          inicial e não leva em conta todos os fatores individuais de saúde. As
          categorias são:
        </p>
        <ul className="aboutList">
          <li className="textSmall">Abaixo de 18,5: Peso abaixo do normal.</li>
          <li className="textSmall">18,5 a 24,9: Peso considerado na faixa saudável.</li>
          <li className="textSmall">25 a 29,9: Peso na faixa do sobrepeso.</li>
          <li className="textSmall">30 a 34,9: Peso na faixa da obesidade grau 1.</li>
          <li className="textSmall">35 a 39,9: Peso na faixa da obesidade grau 2.</li>
          <li className="textSmall">Acima de 40: Peso na faixa da obesidade grau 3.</li>
        </ul>
      </div>
    </div>
  );
}
export default sobre;
