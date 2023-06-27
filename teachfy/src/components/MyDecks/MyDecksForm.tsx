import React, { useEffect, useState } from 'react';
import { getMyDecks } from '../../services/decks/getMyDecks'; // Importe a função fetchUserDecks da sua API
import '../../styles/myDecks.css';
import { BiBookReader, BiEdit } from 'react-icons/bi';

const MyDecksForm: React.FC = () => {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const userStorage = localStorage.getItem('userId');
    const userId = parseInt(userStorage ? userStorage : '0'); // ID do usuário
    fetchDecks(userId);
  }, []);

  const fetchDecks = async (userId: number) => {
    try {
      const response = await getMyDecks(userId);
      setDecks(response);
    } catch (error) {
      console.error('Erro ao buscar os decks:', error);
    }
  };

  const handleStudyClick = (deckId: number) => {
    //criar lógica para estudar o deck
    console.log(`Estudar deck com ID: ${deckId}`);
  };

  const handleEditClick = (deckId: number) => {
    //criar lógica para editar o deck
    console.log(`Editar deck com ID: ${deckId}`);
  };

  return (
    <div className='myDecks-container'>
      <h2>Meus Decks</h2>
      <div className="row">
      {decks.map((deck: any) => (
        <div className="col-sm-2 py-3">
          <div className="card" key={deck.id}>
            <div className="card-body">
              <h3 className="card-title">{deck.name}</h3>
              <p className="card-text">
                {deck.description}
              </p>
              <div className="d-flex">
                <p className="text-muted">
                  {deck.public === 1 ? 'Público' : "Privado"}
                </p>
                <p className="text-muted mx-3"> - </p>
                <p className="text-muted">
                  {deck.type === 1 ? 'Flashcard' : "Avaliativo"}
                </p>
              </div>
            </div>
            <div className="card-footer bg-transparent d-flex p-0">
              <div className="div-button-card border border-white w-50">
                <button className="button-card rounded-left" onClick={() => handleStudyClick(deck.id)}><BiBookReader/> Estudar</button>
              </div>
              <div className="div-button-card border border-white w-50">
                <button className="button-card rounded-right" onClick={() => handleEditClick(deck.id)}><BiEdit/> Editar</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default MyDecksForm;
