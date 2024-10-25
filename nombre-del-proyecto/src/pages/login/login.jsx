import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Estilos personalizados

const Login = () => {
  const navigate = useNavigate(); // Hook para redireccionar

  // Maneja el evento de enviar el formulario
  const handleSignIn = (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario
    navigate('/home'); // Redirige a la página de Home
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src="ruta-de-la-imagen.jpg" alt="Background" className="login-image" />
      </div>
      <div className="login-right">
        <h1>TECHOULET</h1>
        <p>Nice to see you again</p>
        <form onSubmit={handleSignIn}> {/* Se ejecuta al hacer submit */}
          <label htmlFor="login">Login</label>
          <input type="text" id="login" placeholder="Email or phone number" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" />
          
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          
          <button type="submit" className="btn-signin">Sign in</button> {/* Submit del formulario */}

          <div className="or-divider">or sign in with Google</div>

          <button type="button" className="btn-google">Sign in with Google</button>

          <div className="signup">
            <p>Don’t have an account? <a href="#">Sign up now</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
