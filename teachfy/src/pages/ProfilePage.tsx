// import { Navbar } from "../components/Navbar";
import { ProfileForm } from "../components/ProfileForm";
import Sidebar from "../components/SidebarMenu/Sidebar";
import '../styles/ProfilePage.css';

export function ProfilePage() {
  const handleProfileUpdate = (name: string, email: string) => {
    // Implementar a lógica de atualização do perfil do usuário
    console.log("Profile updated:", name, email);
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* <Navbar/> */}
        <Sidebar/>
        <h1>Seus Dados</h1>
        <ProfileForm onSubmit={handleProfileUpdate} name="Graci" email="graci@gmail.com" />
      </div>
    </div>
  );
}
