import api from "../../plugins/axios";

export const newUser = async (
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string
) => {
  try {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password_confirmation', passwordConfirmation);

    //const response = await axios.post('http://localhost:8000/api/users', formData, {
      const response = await api.post('users', formData, {
      headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
      },
    });

    if (response.status === 200) {
      return 'success';
    }
  } catch (error) {
    throw new Error('Erro ao criar novo usuário: ' + error);
  }
};
