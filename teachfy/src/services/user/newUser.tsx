import axios from 'axios';

export const newUser = async (name:string, email:string, password: string) => {
  try {
    const response = await axios.post('http://localhost:8000/api/users', {
      name,
      email,
      password
    });

    if (response.status === 200) {
      return 'success';
    }
  } catch (error) {
    throw new Error('Erro ao criar novo usuário: ' + error);
  }
};
