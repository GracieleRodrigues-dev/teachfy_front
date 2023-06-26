import  { useState } from 'react';
import '../../styles/login.css';
import logoIcon from "../../assets/logo_with_name.png"; // Importe a imagem do diretório assets
import api from '../../plugins/axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Realizar a chamada à API para autenticar o usuário
      const response = await api.post('/login', {
        email: email,
        password: password
      });
  
      // Verificar se a autenticação foi bem-sucedida
      if (response.status === 200) {
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("userId", response.data.data.userid);
        localStorage.setItem("userName", response.data.data.username);
        // Autenticação bem-sucedida, redirecionar para a página de perfil
        window.location.href = '/profile';
      } else {
        // Caso contrário, exibir uma mensagem de erro ou tomar outra ação apropriada
        console.log('Falha na autenticação');
      }
    } catch (error) {
      // Lidar com erros da chamada à API
      console.log('Erro ao autenticar usuário', error);
    }
  };

  return (
    <div className="login-page">
  <div className="form-login">
    <img src={logoIcon} alt="Logo" className="logo-login" />
    <input
      type="email"
      className="input-login"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="password"
      className="input-login"
      placeholder="Senha"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button className="button-entrar" onClick={handleLogin}>
      Entrar
    </button>
  </div>

  <div className="signup-container-login">
  <p>Não tem uma conta? <a href="/signup">Cadastre-se</a></p>
</div>
</div>

  );
};

export default Login;
