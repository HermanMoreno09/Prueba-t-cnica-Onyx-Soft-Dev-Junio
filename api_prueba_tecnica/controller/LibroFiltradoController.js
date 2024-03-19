import LibroModel from "../models/LibroModel.js";

export const filterLibros = async (req, res) => {
    try {
        const { genero, anio } = req.query;
        let libros;
        if (genero && anio) {
            libros = await LibroModel.findAll({
                where: { genero, anio_publicacion}
            });
        } else if (genero) {
            libros = await LibroModel.findAll({
                where: { genero }
            });
        } else if (anio) {
            libros = await LibroModel.findAll({
                where: { anio_publicacion: anio }
            });
        } else {
            return res.status(400).json({ message: 'Ingrese anio o genero.' });
        }
        
        res.json(libros);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

