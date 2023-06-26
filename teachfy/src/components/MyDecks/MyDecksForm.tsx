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

  return (
    <div>
      <h2>Meus Decks</h2>
      {decks.map((deck: any) => (
        <div key={deck.id}>
          <h3>{deck.name}</h3>
          <p>Deck público: {deck.public}</p>
          <p>Tipo: {deck.type}</p>
        </div>
      ))}
    </div>
  );
};

export default MyDecksForm;
