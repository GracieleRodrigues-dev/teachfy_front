import React, { useState } from 'react';

interface SignUpFormProps {
  onSubmit: (name: string, email: string, password: string) => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError('A confirmação de senha não confere.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError('A confirmação de senha não confere.');
      return;
    }

    onSubmit(name, email, password);
  };

  const isSubmitDisabled = password !== confirmPassword || !name || !email || !password;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome Completo</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirmação de Senha</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onBlur={validatePassword} // Adicionado o evento onBlur
        />
        {passwordError && <p>{passwordError}</p>}
      </div>
      <button type="submit" disabled={isSubmitDisabled}>Cadastrar-se</button>
    </form>
  );
};
