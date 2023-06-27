import React from 'react';
import { BsTrash } from 'react-icons/bs';

interface AnkiCardProps {
  card: {
    cardNumber: number;
    frontText: string;
    backText: string;
  };
  onDelete: (cardNumber: number) => void;
  onUpdate: (cardNumber: number, position: string, value: string) => void;
}

const AnkiCard: React.FC<AnkiCardProps> = ({ card, onDelete, onUpdate }) => {
  const handleFrontTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate(card.cardNumber, 'frontText', e.target.value);
  };

  const handleBackTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate(card.cardNumber, 'backText', e.target.value);
  };

  const handleDeleteClick = () => {
    onDelete(card.cardNumber);
  };

  return (
    <div className="anki-card card mt-3 mx-0">
      <div className="anki-card-body card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">Card {card.cardNumber}</h5>
          <button type="button" className="btn btn-dark" onClick={handleDeleteClick}>
            <BsTrash/>
          </button>
        </div>
        <div className="row">
          <div className="col-6">
            <label className='form-label' htmlFor={`frontText-${card.cardNumber}`}>Frente:</label>
            <input
              type="text"
              className='form-control'
              id={`frontText-${card.cardNumber}`}
              value={card.frontText}
              onChange={handleFrontTextChange}
            />
          </div>
          <div className="col-6">
            <label className='form-label' htmlFor={`backText-${card.cardNumber}`}>Verso:</label>
            <input
              type="text"
              className='form-control'
              id={`backText-${card.cardNumber}`}
              value={card.backText}
              onChange={handleBackTextChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnkiCard;
