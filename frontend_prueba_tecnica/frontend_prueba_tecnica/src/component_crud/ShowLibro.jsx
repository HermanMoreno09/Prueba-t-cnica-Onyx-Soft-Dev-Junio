import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const URI = 'http://localhost:8001/libros/';

function ShowLibro() {
    const [libros, setLibros] = useState([]);
    const [anioFiltro, setAnioFiltro] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');


    useEffect(() => {
        getLibros();
    }, []);

    // Obtener la lista de libros
    const getLibros = async () => {
        try {
            const response = await axios.get(URI);
            setLibros(response.data);
        } catch (error) {
            console.error("Error al obtener los libros:", error);
        }
    };

    // Eliminar un libro
    const deleteLibro = async (id) => {
        try {
            await axios.delete(`${URI}${id}`);
            getLibros();
        } catch (error) {
            console.error("Error al eliminar el libro:", error);
        }
    };

    // Funcion para filtrar libros por año de publicación
    const filterLibrosByAnio = (anio) => {
        setAnioFiltro(anio);
    };

    return (
        <div className="container-fluid py-1 px-3">
            <div className="container-fluid py-4">
                <div className="container card p-4">
                    <div className="row">
                        <h2>Prueba tecnica CRUD de la libreria</h2>
                        <div className="col">
                            <Link to="/create" className="btn btn-primary mt-2 mb-2">
                                <i className="fas fa-plus"></i> Agregar libro 
                            </Link>
                            
                            <div className="blog-table-container">
                                <div className="mb-2">
                                    <label htmlFor="fechaInicio" className="form-label">Fecha de inicio:</label>
                                    <input
                                        type="date"
                                        id="fechaInicio"
                                        className="form-control"
                                        value={fechaInicio}
                                        onChange={(e) => setFechaInicio(e.target.value)}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="fechaFin" className="form-label">Fecha de fin:</label>
                                    <input
                                        type="date"
                                        id="fechaFin"
                                        className="form-control"
                                        value={fechaFin}
                                        onChange={(e) => setFechaFin(e.target.value)}
                                    />
                                </div>

                                <div className="mb-2">
                                    <label htmlFor="anioFiltro" className="form-label">Filtrar por anio:</label>
                                    <input
                                        type="text"
                                        id="anioFiltro"
                                        className="form-control"
                                        value={anioFiltro}
                                        onChange={(e) => filterLibrosByAnio(e.target.value)}
                                    />
                                </div>
                                <table className="table">
                                    <thead className="table-primary">
                                        <tr>
                                            <th>Titulo</th>
                                            <th>Autor</th>
                                            <th>Anio de Publicacion</th>
                                            <th>Genero</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {libros
                                            .filter(libro => !anioFiltro || libro.anio_publicacion.toString() === anioFiltro)
                                            .map((libro) => (
                                                <tr key={libro.id}>
                                                    <td>{libro.titulo}</td>
                                                    <td>{libro.autor}</td>
                                                    <td>{libro.anio_publicacion}</td>
                                                    <td>{libro.genero}</td>
                                                    <td>
                                                        <Link to={`/edit/${libro.id}`} className="btn btn-info">
                                                            <i className="fas fa-edit"></i> Editar libro
                                                        </Link>
                                                            
                                                        <button onClick={() => deleteLibro(libro.id)} className="btn btn-danger">
                                                            <i className="fas fa-trash-alt"></i> Eliminar
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowLibro;
