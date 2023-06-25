import { SignUpForm } from '../components/SignUp/SignUpForm';
import { Link } from 'react-router-dom';
import '../styles/signup.css';
import { newUser } from '../services/user/newUser';
import { useNavigate } from 'react-router-dom';


export function SignUpPage() {
  const navigate  = useNavigate();
  const handleRegister = async (name: string, email: string, password: string) => {
    try {
      const result = await newUser(name, email, password);
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
