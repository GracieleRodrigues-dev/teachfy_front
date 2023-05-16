import { LoginForm } from "../components/LoginForm";
import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <img
          src={require("../assets/login-image.jpg")}
          alt="Login"
          className="login-image"
        />
        <LoginForm />
        <div className="login-links">
          <Link to="/signup">Cadastrar-se</Link>
          <Link to="/forgot-password">Esqueceu a senha?</Link>
        </div>
      </div>
    </div>
  );
}
