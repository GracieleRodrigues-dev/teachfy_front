import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileForm from '../components/ProfileForm';
import Sidebar from '../components/SidebarMenu/Sidebar';

interface UserData {
  name: string;
  email: string;
}

const ProfilePage: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        //trocar o id abaixo para pegar os dados do usuário logado
        const response = await axios.get('http://localhost:8000/api/users/1');
        const { name, email } = response.data.data;
        setUserData({ name, email });
      } catch (error) {
        console.error('Erro ao buscar os dados do usuário:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <Sidebar/>
      {userData ? (
        <ProfileForm name={userData.name} email={userData.email} />
      ) : (
        <p>Carregando dados do usuário...</p>
      )}
    </div>
  );
};

export default ProfilePage;
