import { useState } from 'react'
import Login from './Login/Login';
import Registro from './Registro/Registro';
import './App.css'; // Importa el archivo CSS

function App() {
  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  const handleMostrarRegistro = () => {
    setMostrarRegistro(true);
  };

  const handleMostrarLogin = () => {
    setMostrarRegistro(false);
  };

  return (
    <div className="app">
      {!mostrarRegistro ? (
        <Login />
      ) : (
        <Registro />
      )}
      <div className="buttons-container">
        {!mostrarRegistro ? (
          <button onClick={handleMostrarRegistro} className="switch-button">
            ¿No tienes cuenta? Regístrate aqui
          </button>
        ) : (
          <button onClick={handleMostrarLogin} className="switch-button">
            ¿Ya tienes cuenta? Inicia Sesión aqui
          </button>
        )}
      </div>
    </div>
  );
}

export default App;