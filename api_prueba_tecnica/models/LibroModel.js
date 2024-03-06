import db from "../database/db.js";

import { DataTypes } from "sequelize";

const LibroModel = db.define('libros', {
    titulo: { type: DataTypes.STRING },
    autor: { type: DataTypes.STRING },
    anio_publicacion: { type: DataTypes.INTEGER },
    genero: { type: DataTypes.STRING },
})

export default LibroModel;



