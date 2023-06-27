import api from "../../plugins/axios";

export const getMyDecks = async (userId: number) => {
  try {
    const response = await api.get(`/decks?user_id=${userId}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });

    const decks = response.data.data;
    return decks;
  } catch (error) {
    console.error('Erro ao buscar os decks do usuário:', error);
    throw error;
  }
};