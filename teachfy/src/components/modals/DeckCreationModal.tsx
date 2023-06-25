import React from 'react';
import { BiChip } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';
import '../../styles/deckCreationModal.css';

interface ModalProps {
  onClose: () => void;
  onSubmit: () => void;
  handleCardSelection: (card: string) => void;
}

const DeckCreationModal: React.FC<ModalProps> = ({ onClose, onSubmit, handleCardSelection }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="cards">
          <button className="card creation-byMe" onClick={() => handleCardSelection('byMe')}>
            <BsPlusLg className="icon" />
            <h3 className="title">Começar do zero</h3>
            <a className="description">Explore e crie do seu próprio modo.</a>
          </button>
          <button className="card creation-byAI" onClick={() => handleCardSelection('byAI')}>
            <BiChip className="icon" />
            <h3 className="title">Crie para mim</h3>
            <a className="description">Diga-nos o que você precisa que iremos gerar automaticamente.</a>
          </button>
        </div>
        <div className="button-container">
          <button onClick={onClose}>Fechar</button>
          <button onClick={onSubmit}>Criar</button>
        </div>
      </div>
    </div>
  );
};

export default DeckCreationModal;
