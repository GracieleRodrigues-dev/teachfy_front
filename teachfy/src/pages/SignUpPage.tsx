import { SignUpForm } from '../components/SignUpForm';
import { Link } from 'react-router-dom';
import '../styles/signup.css';

export function SignUpPage() {
  const handleRegister = (name: string, email: string, password: string) => {
    // criar lógica para enviar os dados de registro para o banco
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <div className="signup-page">
        <div className="signup-container">
          <h2>Cadastro</h2>        
          <p>Inscreva-se para começar</p>        
          <SignUpForm onSubmit={handleRegister} />
          <div className="signup-links">
            <Link to="/login">Já possui uma conta? Login</Link>
            <Link to="/forgot-password"> Esqueceu a senha?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
