import React, { useEffect, useState } from 'react';
import { getMyDecks } from '../../services/decks/getMyDecks'; // Importe a função fetchUserDecks da sua API

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
    <div>
      <h2>Meus Decks</h2>
      {decks.map((deck: any) => (
        <div key={deck.id}>
          <h3>{deck.name}</h3>
          <p>Deck público: {deck.public}</p>
          {deck.type === 0 ? (
            <p>Avaliativo</p>
          ) : deck.type === 1 ? (
            <p>Flashcard</p>
          ) : null}
          <button onClick={() => handleStudyClick(deck.id)}>Estudar</button>
          <button onClick={() => handleEditClick(deck.id)}>Editar</button>
        </div>
      ))}
    </div>
  );
};

export default MyDecksForm;
