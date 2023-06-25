import axios from 'axios';

export const fetchUserData = async (userId: number) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/users/${userId}`);
    const { name, email } = response.data.data;
    return { name, email };
  } catch (error) {
    console.error('Erro ao buscar os dados do usuário:', error);
    throw error;
  }
};
