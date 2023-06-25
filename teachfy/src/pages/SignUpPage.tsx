import { Link } from 'react-router-dom';
import '../styles/signup.css';

import { useNavigate } from 'react-router-dom';
import { newUser } from '../services/user/newUser';
import { SignUpForm } from '../components/SignUp/SignUpForm';


export function SignUpPage() {
  const navigate  = useNavigate();
  const handleRegister = async (name: string, email: string, password: string, passwordConfirmation:string) => {
    try {
      const result = await newUser(name, email, password,passwordConfirmation);
      if (result === 'success') {
        alert('Usuário cadastrado com sucesso!');
        navigate('/login');
      }
    } catch (error) {
      alert(error);
    }
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
            <Link to="/forgot-password">Esqueceu a senha?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
