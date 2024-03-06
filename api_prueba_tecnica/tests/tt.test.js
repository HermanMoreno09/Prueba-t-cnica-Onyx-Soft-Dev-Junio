const request = require('supertest')
import app from '../app.js';


describe('API de la Librería', () => {
  

  it('should show all users', async () => {
    const res = await request(app).get('/libros')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('libros')
}) 

  it('Debería obtener todos los libros', async () => {
    const res = await request(app).get('/libros');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('Debería obtener un libro por ID', async () => {
    const res = await request(app).get('/libros/1');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Object);
  });

  it('Debería agregar un libro', async () => {
    const nuevoLibro = {
      titulo: 'Nuevo Libro',
      autor: 'Autor Nuevo',
      anio_publicacion: 2023,
      genero: 'Género Nuevo'
    };

    const res = await request(app).post('/libros').send(nuevoLibro);
    expect(res.status).toBe(201);
    expect(res.body.message).toBe('Registro creado exitoso en la bd');
  });

  it('Debería editar un libro', async () => {
    const libroEditado = {
      titulo: 'Libro Editado',
      autor: 'Autor Editado',
      anio_publicacion: 2022,
      genero: 'Género Editado'
    };

    const res = await request(app).put('/libros/1').send(libroEditado);
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Registro actualizado...');
  });

  it('Debería eliminar un libro', async () => {
    const res = await request(app).delete('/libros/1');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Registro eliminado con exito');
  });

  it('No debería agregar un libro sin campos requeridos', async () => {
    const libroSinCampos = {};
    const res = await request(app).post('/libros').send(libroSinCampos);
    expect(res.status).toBe(400);
    expect(res.body.message).toBe('Todos los campos son requeridos.');
  });

  it('No debería editar un libro sin campos requeridos', async () => {
    const libroEditadoSinCampos = {};
    const res = await request(app).put('/libros/1').send(libroEditadoSinCampos);
    expect(res.status).toBe(400);
    expect(res.body.message).toBe('Todos los campos son requeridos.');
  });

});
