import React, { useState } from 'react';
import '../../styles/deckavaliativo.css';

// ...

const DeckAvaliativo: React.FC<DeckAvaliativoProps> = ({ onSubmit }) => {
  const [typeperguntas, setTypePerguntas] = useState('');
  const [perguntas, setPerguntas] = useState([{ pergunta: '', opcoes: [''] }]);

  const handlePerguntaChange = (index: number, pergunta: string) => {
    const updatedPerguntas = [...perguntas];
    updatedPerguntas[index].pergunta = pergunta;
    setPerguntas(updatedPerguntas);
  };

  const handleOpcaoChange = (perguntaIndex: number, opcaoIndex: number, opcao: string) => {
    const updatedPerguntas = [...perguntas];
    updatedPerguntas[perguntaIndex].opcoes[opcaoIndex] = opcao;
    setPerguntas(updatedPerguntas);
  };

  const addPergunta = () => {
    const updatedPerguntas = [...perguntas, { pergunta: '', opcoes: [''] }];
    setPerguntas(updatedPerguntas);
  };

  const handleSubmit = () => {
    onSubmit('title', 'description', typeperguntas, perguntas);
  };

  return (
    <div className="container">
      <div className="campo">
        <div className="descricao">Tipo de Perguntas:</div>
        <select className="input" value={typeperguntas} onChange={(e) => setTypePerguntas(e.target.value)}>
        <option value="">Selecione o tipo de pergunta</option>
        <option value="multiplaEscolha">Múltipla Escolha</option>
        <option value="descritiva">Descritiva</option>
        </select>

      </div>
      <h3>Perguntas:</h3>
      {perguntas.map((pergunta, index) => (
        <div className="pergunta" key={index}>
          <div className="pergunta-label">Pergunta {index + 1}:</div>
          <input
            className="input"
            type="text"
            value={pergunta.pergunta}
            onChange={(e) => handlePerguntaChange(index, e.target.value)}
          />
          <div className="opcoes-label">Opções:</div>
          <ul className="opcoes-list">
            {pergunta.opcoes.map((opcao, opcaoIndex) => (
              <li key={opcaoIndex}>
                <input
                  className="input"
                  type="text"
                  value={opcao}
                  onChange={(e) => handleOpcaoChange(index, opcaoIndex, e.target.value)}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button className="btn-adicionar" onClick={addPergunta}>
        Adicionar Pergunta
      </button>
      <br />
      <button className="btn-enviar" onClick={handleSubmit}>
        Enviar
      </button>
    </div>
  );
};

export default DeckAvaliativo;
