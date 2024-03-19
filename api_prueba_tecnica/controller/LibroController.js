import LibroModel from "../models/LibroModel.js";
// Metodos CRUD
// Mostrar todos los registros de los librus
export const getAllLibros = async(req, res) =>{
    try {
       const libros = await LibroModel.findAll()
       res.json(libros)
    } catch (error) {
        res.json({message: error.message})
    }
}


// Mostrar un registro de los libros 
export const getLibro = async (req, res) =>{
    try {
        const libros = await LibroModel.findAll({
            where: { id: req.params.id}
        })
        res.json(libros[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

// Crear un registro de los libross 
export const createLibro = async (req, res) => {
    try {
        await LibroModel.create(req.body);
        res.json({
            "message": "Registro creado exitoso en la bd"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Actualizar un registro de los lobros 
export const updateLibro = async (req, res) => {
    try {
        await LibroModel.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro actualizado..."
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Eliminar un registro de los libros 
export const deleteLibro = async (req, res) => {
    try {
        await LibroModel.destroy({
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro eliminado con exito"
        });
    } catch (error) {
        res.json({ message: error.message });
    }


    
}
