import React, { useState } from 'react';
import DeckCreationModal from '../modals/DeckCreationModal';
import { useNavigate  } from 'react-router-dom';

/*interface NewDeckFlashCardProps {
    title: string,
    description: string,
    directory: string,
    isPublic: boolean,
    isDuplicable: boolean,
    selectedCard: string
}*/

export const NewDeckFlashCardForm= () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [directory, setDirectory] = useState('');
  const [isPublic, setPublic] = useState(false);
  const [isDuplicable, setDuplicable] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState('');
  const navigate = useNavigate();

  const closeModal = () => {
    setModalOpen(false);
  };

  const newDeck = () => {
    console.log(selectedCard)    
    if (selectedCard === 'byMe') {
      navigate('/decks/novo-deck/flashcard/byMe', { state: { title, description } });
    } else if (selectedCard === 'byAI') {
      navigate('/decks/novo-deck/flashcard/byAI', { state: { title, description } });
    }
  };

  const handleCardSelection = (card: string) => {
    setSelectedCard(card);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="newDeck-container">
        <div className="newDeck-section">
          <h2 className="newDeck-title">Novo deck de flashcard</h2>
        </div>
        <div>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="directory">Diretório</label>
          <input
            type="file"
            id="directory"
            value={directory}
            onChange={(e) => setDirectory(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="isPublic">Deck público</label>
          <input
            type="checkbox"
            id="isPublic"
            checked={isPublic}
            onChange={(e) => setPublic(e.target.checked)}
          />
        </div>
        <div>
          <label htmlFor="isDuplicable">Permite duplicação</label>
          <input
            type="checkbox"
            id="isDuplicable"
            checked={isDuplicable}
            onChange={(e) => setDuplicable(e.target.checked)}
          />
        </div>
      </div>
      <button type="submit">Criar</button>
      {isModalOpen && <DeckCreationModal onClose={closeModal} onSubmit={newDeck} handleCardSelection={handleCardSelection} />}
    </form>
  );
};
