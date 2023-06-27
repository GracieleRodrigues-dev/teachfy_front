import { useEffect, useState } from 'react';
import ProfileForm from '../components/Profile/ProfileForm';
import Sidebar from '../components/SidebarMenu/Sidebar';
import { fetchUserData } from '../services/user/getUserData';


interface UserData {
  name: string;
  email: string;
}

const ProfilePage = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Trocar o ID abaixo para pegar os dados do usuário logado
        const userStorage = localStorage.getItem('userId');
        const userId = parseInt(userStorage ? userStorage : '0');
        const userData = await fetchUserData(userId);
        setUserData(userData);
      } catch (error) {
        console.log('Erro ao buscar os dados do usuário:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {userData ? (
        <>
          <Sidebar/>
          <ProfileForm name={userData.name} email={userData.email} />
        </>
      ) : (
        <p>Carregando dados do usuário...</p>
      )}
    </div>
  );
};

export default ProfilePage;
