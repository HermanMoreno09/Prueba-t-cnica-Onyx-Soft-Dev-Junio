import express from 'express'
import { createLibro, deleteLibro, getAllLibros, getLibro, updateLibro } from '../controller/LibroController.js'
const router = express.Router()

router.get('/', getAllLibros)
router.get('/:id', getLibro)
router.post('/', createLibro)
router.put('/:id', updateLibro)
router.delete('/:id', deleteLibro)

export default router;
