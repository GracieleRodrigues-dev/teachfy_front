import React, { useState } from 'react';
import AnkiCard from './AnkiCard';

interface NewDeckFlashCardByMeProps {
  title: string;
  description: string;
  directory: string;
  isPublic: boolean;
  isDuplicable: boolean;
}

interface Card {
  cardNumber: number;
  frontText: string;
  backText: string;
}

export const NewDeckFlashCardByMeForm: React.FC<NewDeckFlashCardByMeProps> = ({ title, description,directory,isPublic, isDuplicable})=> {
  const [newTitle,setTitle] = useState(title);
  const [newDescription,setDescription] = useState(description);
  const [cards, setCards] = useState<Card[]>([{ cardNumber: 1, frontText: '', backText: '' }]);

  const saveDeck = () => {
    console.log( title, description,directory,isPublic, isDuplicable);
  };


  const handleAddCard = () => {
    const nextCardNumber = cards.length + 1;
    setCards([...cards, { cardNumber: nextCardNumber, frontText: '', backText: '' }]);
  };

  const handleDeleteCard = (cardNumber: number) => {
    if (cards.length > 1) {
      const updatedCards = cards.filter((card) => card.cardNumber !== cardNumber);
      setCards(updatedCards);
    }
  };

  const handleUpdateCard = (cardNumber: number, position: string, value: string) => {
    const updatedCards = cards.map((card) => {
      if (card.cardNumber === cardNumber) {
        return { ...card, [position]: value };
      }
      return card;
    });
    setCards(updatedCards);
  };


  return (
    <form onSubmit={saveDeck}>
      <div className="newDeck-container">
        <div className="newDeck-section">
          <h2 className="newDeck-title">Novo deck de flashcard</h2>        
          <div>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              value={newTitle}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Descrição</label>
            <input
              type="text"
              id="description"
              value={newDescription}
              onChange={(e) => setDescription(e.target.value)}
            />
          {cards.map((card) => (
              <AnkiCard
                key={card.cardNumber}
                card={card}
                onDelete={handleDeleteCard}
                onAdd={handleAddCard}
                onUpdate={handleUpdateCard}
              />
            ))}
          </div> 
        </div>
      </div>
      <button type="button" onClick={saveDeck}>Salvar</button>
    </form>
  );
};
