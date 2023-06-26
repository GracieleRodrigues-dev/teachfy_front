import React from 'react';

interface AnkiCardProps {
  card: {
    cardNumber: number;
    frontText: string;
    backText: string;
  };
  onDelete: (cardNumber: number) => void;
  onAdd: () => void;
  onUpdate: (cardNumber: number, position: string, value: string) => void;
}

const AnkiCard: React.FC<AnkiCardProps> = ({ card, onDelete, onAdd, onUpdate }) => {
  const handleFrontTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate(card.cardNumber, 'frontText', e.target.value);
  };

  const handleBackTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate(card.cardNumber, 'backText', e.target.value);
  };

  const handleDeleteClick = () => {
    onDelete(card.cardNumber);
  };
  const handleAddClick = () => {
    onAdd();
  };

  return (
    <div className="anki-card">
      <div className="anki-card-header">
        <span>{card.cardNumber}</span>
        <button type="button" onClick={handleDeleteClick}>-</button>
        <button type="button" onClick={handleAddClick}>+</button>
      </div>
      <div className="anki-card-body">
        <label htmlFor={`frontText-${card.cardNumber}`}>Frente:</label>
        <input
          type="text"
          id={`frontText-${card.cardNumber}`}
          value={card.frontText}
          onChange={handleFrontTextChange}
        />
        <label htmlFor={`backText-${card.cardNumber}`}>Verso:</label>
        <input
          type="text"
          id={`backText-${card.cardNumber}`}
          value={card.backText}
          onChange={handleBackTextChange}
        />
      </div>
    </div>
  );
};

export default AnkiCard;
