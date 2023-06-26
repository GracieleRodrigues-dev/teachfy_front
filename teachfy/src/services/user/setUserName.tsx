import api from '../../plugins/axios';

export const setUserName = async (userId: number, newName: string) => {
  try {
    //const response = await axios.patch(`http://localhost:8000/api/users/${userId}`, { name: newName });
    const response = await api.patch(`users/${userId}`, { name: newName });

    if (response.status === 200) {
      return 'success';
    }
  } catch (error) {
    throw new Error('Erro ao alterar o nome do usuário: ' + error);
  }
};
