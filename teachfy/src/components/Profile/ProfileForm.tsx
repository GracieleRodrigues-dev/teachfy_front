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


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userId = 1; // ID do usuário
      const result = await setUserName(userId, newName);
      if (result === 'success') {
        alert('Nome do usuário alterado com sucesso!');
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
              Novo Nome:
              <br/>
              <input
                type="text"
                value={newName}
                onChange={handleNameChange}
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
