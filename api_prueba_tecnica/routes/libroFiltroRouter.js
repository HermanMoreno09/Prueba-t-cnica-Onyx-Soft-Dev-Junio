import express from 'express';
import { filterLibros } from '../controller/LibroFiltradoController.js';

const router = express.Router();

// Define la ruta para filtrar libros
router.get('/filtro', filterLibros);

export default router;
