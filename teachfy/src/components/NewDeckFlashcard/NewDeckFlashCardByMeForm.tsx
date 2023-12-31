import React, { useState } from 'react';
import AnkiCard from './AnkiCard';
import { newDeckAnki } from '../../services/decks/newDeckAnki';
import '../../styles/newDeck.css';

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
  const [newPublic, setPublic] = useState(isPublic);
  const [newCloneable, setDuplicable] = useState(isCloneable);
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
    const userStorage = localStorage.getItem('userId');
    const deckData = {
      user_id: parseInt(userStorage ? userStorage : '0'),
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

  const handleAddClick = () => {
    handleAddCard();
  };

  return (
    <div className="newDeck-container">
      <div className="newDeck-section">
        <h2 className="newDeck-title">Novo deck de flashcard</h2>   
        <form onSubmit={handleSubmit}>    
              <div className="row">
              <div className="col-4">
                <label className="form-label" htmlFor="title">Título</label>
                <input
                  className="form-control" 
                  type="text"
                  id="title"
                  value={newTitle}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="col-8">
                <label className="form-label" htmlFor="description">Descrição</label>
                <input
                  className="form-control" 
                  type="text"
                  id="description"
                  value={newDescription}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div> 
              <div className="col-10 d-flex">
                <div className='mt-3 form-check'>
                  <input
                    type="checkbox"
                    className="form-check-input" 
                    id="newPublic"
                    checked={newPublic}
                    onChange={(e) => setPublic(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="newPublic">Deck público</label>
                </div>
                <div className='mt-3 ms-5 form-check'>
                  <input
                    type="checkbox"
                    className="form-check-input" 
                    id="newCloneable"
                    checked={newCloneable}
                    onChange={(e) => setDuplicable(e.target.checked)}
                  />
                  <label className="form-label" htmlFor="newCloneable">Permite duplicação</label>
                </div>
              </div>
              <div className="col-2 justify-content-end d-flex align-items-end">
                <div>
                  <button type="button" className="btn btn-dark btn-sm" onClick={handleAddClick}>Adicionar Card</button>
                </div>
              </div>
              <div className="col-12">
                {cards.map((card) => (
                    <AnkiCard
                      key={card.cardNumber}
                      card={card}
                      onDelete={handleDeleteCard}
                      onUpdate={handleUpdateCard}
                    />
                  ))}
              </div>
              <div className="col-12 d-flex justify-content-end mt-3">
                <button className='btn btn-dark'>Salvar</button>
              </div>
            </div> 
        </form>
      </div>
    </div>
  );
};
