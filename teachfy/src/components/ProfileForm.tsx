import React, { useState } from 'react';
import '../styles/ProfilePage.css';
import Modal from 'react-modal';

interface ProfileFormProps {
  name: string;
  email: string;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ name, email }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);

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

  const handleSubmit = () => {
    // fazer a chamada à API para atualizar os dados do usuário
    // updateUserData(newName, newEmail);
    // history.push('/profile');
  };

  return (
    <div className="profile-container">
      <div className="profile-section">
        <h2 className="profile-title">Meu perfil</h2>
        <div className="profile-data">
          <p>
            <span className="profile-label">Nome:</span>{' '}
            <span className="profile-value">{name}</span>
          </p>
          <p>
            <span className="profile-label">Email:</span>{' '}
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
          <form>
            <label>
              Novo Nome:
              <input
                type="text"
                value={newName}
                onChange={handleNameChange}
              />
            </label>
            <label>
              Novo Email:
              <input
                type="email"
                value={newEmail}
                onChange={handleEmailChange}
              />
            </label>
            <div className="modal-buttons">
              <button className="profile-button" onClick={handleSubmit}>
                Salvar
              </button>
              <button className="profile-button" onClick={closeModal}>
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
