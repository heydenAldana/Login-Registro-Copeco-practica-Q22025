import React, { useState } from 'react';
import './Registro.css'; 

const Registro = () => {
  const [dni, setDni] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Registro: ', {dni, nombre, apellido, fechaNacimiento, correo, contrasena, confirmarContrasena });
    if (contrasena !== confirmarContrasena) {
      alert('Las contraseñas no coinciden.');
      return;
    }
  };

  return (
    <div className="registro">
      <h2>Registrece</h2>
      <form onSubmit={handleSubmit} className="registro-form">
        <div className="input-group">
          <label htmlFor="dni">Numero de Identidad:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setDni(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
          <input
            type="date"
            id="fechaNacimiento"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="correo">Correo Electrónico:</label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmarContrasena">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirmarContrasena"
            value={confirmarContrasena}
            onChange={(e) => setConfirmarContrasena(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <button type="submit" className="registro-button">Registrarse</button>
      </form>
    </div>
  );
};

export default Registro;