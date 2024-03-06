import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8001/libros/';

const CreateLibro = () => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [anioPublicacion, setAnioPublicacion] = useState('');
  const [genero, setGenero] = useState('');
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();

    try {
      await axios.post(URI, {
        titulo: titulo,
        autor: autor,
        anio_publicacion: anioPublicacion,
        genero: genero,
      });

      navigate('/');
    } catch (error) {
      console.error('Error al almacenar el libro:', error);
    }
  };

  return (
    <div className="container-fluid py-1 px-3">
      <div className="container-fluid py-4">
        <div className="container card p-4">
          <div className="row">
            <div className="col">
              <h3>Crear Libro</h3>
              <form onSubmit={store}>
                <div className="mb-3">
                  <label className="form-label">Titulo</label>
                  <input
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Autor</label>
                  <input
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Año de Publicacion</label>
                  <input
                    value={anioPublicacion}
                    onChange={(e) => setAnioPublicacion(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Genero</label>
                  <input
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div>
                  <div className="btn-group">
                    <button type="submit" className="btn btn-primary mr-3">
                      Guardar
                    </button>
                    <Link to="/" className="btn btn-danger">
                      <i className="fas fa-plus"></i> Cancelar
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateLibro;
