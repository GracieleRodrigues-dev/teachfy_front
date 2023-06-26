import api from '../../plugins/axios';

export const setUserName = async (userId: number, formData: FormData) => {
  try {
    //const response = await axios.patch(`http://localhost:8000/api/users/${userId}`, { name: newName });
    console.log(localStorage.getItem('token'));
    const response = await api.put(`users/${userId}`, formData, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });
    return response;
  } catch (error) {
    throw new Error('Erro ao alterar o nome do usuário: ' + error);
  }
};
