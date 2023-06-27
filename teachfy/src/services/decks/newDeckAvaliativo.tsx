import api from '../../plugins/axios';

interface Avaliativo {
  type: number;
  question: string;
  answer: string;
}

export const newDeckAnki = async (data: {
  user_id: number;
  folder_id: number;
  name: string;
  ispublic: number;
  clonable: number;
  type: number;
  perguntas: Avaliativo[];
}) => {
  try {
    const formData = new FormData();
    formData.append('user_id', String(data.user_id));
    formData.append('folder_id', String(data.folder_id));
    formData.append('name', data.name);
    formData.append('public', String(data.ispublic));
    formData.append('clonable', String(data.clonable));
    formData.append('type', String(data.type));
    formData.append('perguntas', JSON.stringify(data.perguntas));

    const response = await api.post('decks', formData, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    });

    if (response.status === 200) {
      return 'success';
    }
  } catch (error) {
    throw new Error('Erro ao criar deck: ' + error);
  }
};
