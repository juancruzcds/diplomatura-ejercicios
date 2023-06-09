import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/components/pages/publicarAnimal.css';
import Huellita from '../images/huellita.png'
const PublicarPage = (props) => {
    const [nombre, setNombre] = useState('');
    const [raza, setRaza] = useState('');
    const [edad, setEdad] = useState(0);
    const [castrado, setCastrado] = useState(false);
    const [imagen, setImagen] = useState(null);
    const [descripcion, setDescripcion] = useState('');
    const [tipo, setTipo] = useState('Gato');

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleRazaChange = (event) => {
        setRaza(event.target.value);
    };

    const handleEdadChange = (event) => {
        setEdad(parseInt(event.target.value, 10));
    };

    const handleCastradoChange = (event) => {
        setCastrado(event.target.checked);
    };

    const handleTipoChange = (event) => {
        setTipo(event.target.value);
    };

    const handleDescripcionChange = (event) => {
        setDescripcion(event.target.value);
    };

    const handleImagenChange = (event) => {
        setImagen(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setNombre('');
        setRaza('');
        setEdad(0);
        setCastrado(false);
        setImagen(null);
        setDescripcion('');
        setTipo('Gato');
    };
    return (

        <form onSubmit={handleSubmit} className="custom-form">
            <div className="redes-title">
                <h2>Publicar Patita</h2>
            </div>
            <div className="mb-3">
                <label htmlFor="imagen" className="form-label">
                    Imagen
                </label>
                <input
                    type="file"
                    className="form-control"
                    id="imagen"
                    accept="image/*"
                    onChange={handleImagenChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                    Nombre
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    value={nombre}
                    onChange={handleNombreChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="raza" className="form-label">
                    Raza
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="raza"
                    value={raza}
                    onChange={handleRazaChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="edad" className="form-label">
                    Edad
                </label>
                <input
                    type="number"
                    className="form-control"
                    id="edad"
                    value={edad}
                    onChange={handleEdadChange}
                    required
                />
            </div>
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="castrado"
                    checked={castrado}
                    onChange={handleCastradoChange}
                />
                <label className="form-check-label" htmlFor="castrado">
                    Castrado o Vacunado
                </label>
            </div>
            <div className="mb-3">
                <label htmlFor="tipo" className="form-label">
                    Tipo
                </label>
                <select
                    id="tipo"
                    value={tipo}
                    onChange={handleTipoChange}
                    className="form-control"
                >
                    <option  value="Gato">Gato</option>
                    <option  value="Perro">Perro</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">
                    Descripción
                </label>
                <textarea
                    id="descripcion"
                    value={descripcion}
                    onChange={handleDescripcionChange}
                    className="form-control"
                    style={{ height: '150px' }}
                />
            </div>
            <button type="submit" className="btn btn-primary btn-violet">
                Enviar
            </button>
            <div className='imagen-form'>
                <img src={Huellita} alt='Huellita' width="50" />
            </div>
        </form>

    );
};



export default PublicarPage;