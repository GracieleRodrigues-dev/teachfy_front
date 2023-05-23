import React, { useState } from 'react';

interface ProfileFormProps {
  onSubmit: (name: string, email: string) => void;
  name: string;
  email: string;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ onSubmit, name, email }) => {
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(updatedName, updatedEmail);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          value={updatedEmail}
          onChange={(e) => setUpdatedEmail(e.target.value)}
        />
      </div>
      {/* <button type="submit">Alterar Dados</button> */}
    </form>
      );
};
