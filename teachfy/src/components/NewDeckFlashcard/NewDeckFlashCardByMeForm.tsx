import React, { useState } from 'react';
import AnkiCard from './AnkiCard';
import { newDeckAnki } from '../../services/decks/newDeckAnki';

interface NewDeckFlashCardByMeProps {
  title: string;
  description: string;
  directory: number;
  isPublic: boolean;
  isCloneable: boolean;
}

interface Card {
  cardNumber: number;
  frontText: string;
  backText: string;
}

interface CardBD {
  type: number;
  question: string;
  answer: string;
}

export const NewDeckFlashCardByMeForm: React.FC<NewDeckFlashCardByMeProps> = ({ title, description,directory,isPublic, isCloneable})=> {
  const [newTitle,setTitle] = useState(title);
  const [newDescription,setDescription] = useState(description);
  const [cards, setCards] = useState<Card[]>([{ cardNumber: 1, frontText: '', backText: '' }]);

  const convertCardFormat = (card: Card): CardBD => {
    return {
      type: 1,
      question: card.frontText || '',
      answer: card.backText || '',
    };
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const deckData = {
      user_id: 1,
      folder_id: directory ? directory : 0,
      name: newTitle,
      ispublic: isPublic ? 1 : 0,
      clonable: isCloneable ? 1 : 0,
      type: 1,
      cards: cards.map(convertCardFormat) // Converter os objetos Card do formulário
    };
  
    // Chamar a função saveDeck passando o objeto deckData
    saveDeck(deckData);
  };

  const saveDeck = async (deckData: {
    user_id: number;
    folder_id: number;
    name: string;
    ispublic: number;
    clonable: number;
    type: number;
    cards: CardBD[];
  }) => {
    try {
      const result = await newDeckAnki(deckData);
      if (result === 'success') {
        alert('Novo deck gerado com sucesso!');
      }
    } catch (error) {
      alert(error);
    }
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
    <form onSubmit={handleSubmit}>
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
      <button>Salvar</button>
    </form>
  );
};
