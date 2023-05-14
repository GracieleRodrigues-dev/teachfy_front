import './Login.css';
import logo from '../assets/logo.png';

export function Login() {
  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="logo" />
      <form className="login-form">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />

        <div className="button-container">
          <button type="submit">Entrar</button>
        </div>
      </form>
      <div className="register-forgot-container">
        <a href="#">Cadastrar-se</a>
        <a href="#">Esqueceu a senha?</a>
      </div>
    </div>
  );
}
