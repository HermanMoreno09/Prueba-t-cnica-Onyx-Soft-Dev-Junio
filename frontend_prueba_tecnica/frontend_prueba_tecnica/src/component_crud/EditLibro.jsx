import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const URI = 'http://localhost:8001/libros/';

function EditLibro() {
  const [libro, setLibro] = useState({
    titulo: '',
    autor: '',
    anio_publicacion: '',
    genero: '',
  });
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, {
      titulo: libro.titulo,
      autor: libro.autor,
      anio_publicacion: libro.anio_publicacion,
      genero: libro.genero,
    });
    navigate('/');
  };

  useEffect(() => {
    getLibroById();
  }, []);

  const getLibroById = async () => {
    try {
      const res = await axios.get(URI + id);
      setLibro(res.data);
    } catch (error) {
      console.error('Error al obtener el libro por Id:', error);
      navigate('/error');
    }
  };

  return (
    <div className="container-fluid py-1 px-3">
      <div className="container-fluid py-4">
        <div className="container card p-4">
          <div className="row">
            <div className="col">
              <h3>Editar Libro</h3>
              <form onSubmit={update}>
                <div className="mb-3">
                  <label className="form-label">Titulo</label>
                  <input
                    value={libro.titulo}
                    onChange={(e) => setLibro({ ...libro, titulo: e.target.value })}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Autor</label>
                  <input
                    value={libro.autor}
                    onChange={(e) => setLibro({ ...libro, autor: e.target.value })}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Año de Publicacion</label>
                  <input
                    value={libro.anio_publicacion}
                    onChange={(e) => setLibro({ ...libro, anio_publicacion: e.target.value })}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Género</label>
                  <input
                    value={libro.genero}
                    onChange={(e) => setLibro({ ...libro, genero: e.target.value })}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div>
                  <div className="btn-group">
                    <button type="submit" className="btn btn-primary mr-3">
                      Actualizar
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
}

export default EditLibro;
