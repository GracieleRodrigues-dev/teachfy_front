import React, { useState } from 'react';
import '../../styles/ProfilePage.css';
import Modal from 'react-modal';
import { setUserName } from '../../services/user/setUserName';

interface ProfileFormProps {
  name: string;
  email: string;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ name, email }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newPassword, setNewPassword] = useState("");


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userStorage = localStorage.getItem('userId');
      const userId = parseInt(userStorage ? userStorage : '0'); // ID do usuário
      
      const formData = new FormData();
      formData.append('name', newName);
      formData.append('email', newEmail);
      formData.append('password', newPassword);

      const result = await setUserName(userId, formData);
      if (result.status === 200) {
        alert('Usuário alterado com sucesso!');
        closeModal();
        window.location.reload(); // Recarrega a página
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-section">
        <h2 className="profile-title">Meu perfil</h2>
        <div className="profile-data">
          <p>
            <span className="profile-label">Nome</span>{' '}
            <br/>
            <span className="profile-value">{name}</span>
          </p>
          <p>
            <span className="profile-label">E-mail</span>{' '}
            <br/>
            <span className="profile-value">{email}</span>
          </p>
        </div>
        <div className="profile-buttons">
          <button className="profile-button" onClick={openModal}>
            Alterar Dados
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Alterar Dados Modal"
        className="custom-modal"
        overlayClassName="custom-OverlayClass"
      >
        <div className="modal-content">  
        <h2>Alterar Dados</h2>
        <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <br/>
              <input
                type="text"
                value={newName}
                required={true}
                onChange={handleNameChange}
              />
              <br/>
            </label>
            <label>
              E-mail:
              <br/>
              <input
                type="text"
                value={newEmail}
                required={true}
                onChange={handleEmailChange}
              />
              <br/>
            </label>
            <label>
              Senha:
              <br/>
              <input
                type="password"
                value={newPassword}
                required={true}
                onChange={handlePasswordChange}
              />
              <br/>
            </label>
            <div className="modal-buttons">
              <button className="save-button">
                Salvar
              </button>
              <button className="close-button" onClick={closeModal}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileForm;
