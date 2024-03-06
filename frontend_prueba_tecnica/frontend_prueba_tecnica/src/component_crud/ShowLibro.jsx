import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from 'react'

const URI = 'http://localhost:8001/libros/';

function ShowLibro() {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        getLibros();
    }, []);

    // Obtener la lista de libros 
    const getLibros = async () => {
        try {
            const response = await axios.get(URI);
            setLibros(response.data);
        } catch (error) {
            console.error("Error al obtener los libross:", error);
        }
    }

    // Eliminar un libro
    const deleteLibro = async (id) => {
        try {
            await axios.delete(`${URI}${id}`);
            getLibros();
        } catch (error) {
            console.error("Error al eliminar el libro:", error);
        }
    }

    return (
        <div className="container-fluid py-1 px-3">
            <div className="container-fluid py-4">
                <div className="container card p-4">
                    <div className="row">
                        <h2>Prueba tecnica crud de la libreria</h2>
                        <div className="col">
                            <Link to="/create" className="btn btn-primary mt-2 mb-2">
                                <i className="fas fa-plus"></i> Agregar Libro Nuevo
                            </Link>
                            <div className="blog-table-container">
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
                                        {libros.map((libro) => (
                                            <tr key={libro.id}>
                                                <td>{libro.titulo}</td>
                                                <td>{libro.autor}</td>
                                                <td>{libro.anio_publicacion}</td>
                                                <td>{libro.genero}</td>
                                                <td>
                                                    <Link to={`/edit/${libro.id}`} className="btn btn-info">
                                                        <i className="fas fa-edit"></i> Editar Libro
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
