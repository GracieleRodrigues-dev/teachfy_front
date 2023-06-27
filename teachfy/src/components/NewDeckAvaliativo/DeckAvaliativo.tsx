import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/deckavaliativo.css';


interface DeckAvaliativoProps {
  onSubmit: (
    title: string,
    description: string,
    directory: string,
    isPublic: boolean,
    isDuplicable: boolean,
    allowFeedback: boolean,
    selectedCard: string
  ) => void;
}

interface DeckAvaliativoProps {
  titulo: string;
  descricao: string;
  diretorio: string;
  deckPublico: boolean;
  permitirDuplicacao: boolean;
  gerarFeedback: boolean;
}

const DeckAvaliativo: React.FC<DeckAvaliativoProps> = ({ onSubmit }) => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [diretorio, setDiretorio] = useState('');
  const [deckPublico, setDeckPublico] = useState(false);
  const [permitirDuplicacao, setPermitirDuplicacao] = useState(false);
  const [gerarFeedback, setGerarFeedback] = useState(false);
  const [selectedCard, setSelectedCard] = useState('');
  const navigate = useNavigate();

  const handleCardSelection = (card: string) => {
    setSelectedCard(card);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(
      titulo,
      descricao,
      diretorio,
      deckPublico,
      permitirDuplicacao,
      gerarFeedback,
      selectedCard
    );
    navigate('/decks/novo-deck/avaliativo/byMe', { state: { titulo, descricao } });
  };

  const handleDirectoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const selectedDirectory = selectedFiles[0].webkitRelativePath;
      setDiretorio(selectedDirectory);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="campo">
          <div className="descricao">Novo Deck Avaliativo</div>
          <div className="titulo">Título</div>
          <input
            className="input"
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required 
          />
        </div>
        <div className="campo">
          <div className="descricao">Descrição</div>
          <input
            className="input"
            type="text"
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <div className="descricao">Diretório</div>
          <input
            type="file"
            id="directory"
            value={diretorio}
            onChange={handleDirectoryChange}
          />
        </div>
        <div className="campo">
          <div className="descricao">
            <input
              type="checkbox"
              id="isPublic"
              checked={deckPublico}
              onChange={(e) => setDeckPublico(e.target.checked)}
            />
            <label htmlFor="isPublic" className={`check-label ${deckPublico ? 'roxo' : ''}`}>
              Deck público
            </label>
          </div>
        </div>
        <div className="campo">
          <div className="descricao">
            <input
              type="checkbox"
              id="isDuplicable"
              checked={permitirDuplicacao}
              onChange={(e) => setPermitirDuplicacao(e.target.checked)}
            />
            <label htmlFor="isDuplicable" className={`check-label ${permitirDuplicacao ? 'roxo' : ''}`}>
              Permitir duplicação
            </label>
          </div>
        </div>
        <div className="campo">
          <div className="descricao">
            <input
              type="checkbox"
              id="allowFeedback"
              checked={gerarFeedback}
              onChange={(e) => setGerarFeedback(e.target.checked)}
            />
            <label htmlFor="allowFeedback" className={`check-label ${gerarFeedback ? 'roxo' : ''}`}>
              Gerar feedback para participantes
            </label>
          </div>
        </div>
      </div>
      <button type="submit" className="btn-criar">
        Criar
      </button>
    </form>
  );
};

export default DeckAvaliativo;
