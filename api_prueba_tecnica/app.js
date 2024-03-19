import express from "express";
import cors from 'cors';
import db from './database/db.js';
import libroRoutes from './routes/routes.js';
import libroFiltroRouter from './routes/libroFiltroRouter.js';
const app = express();

app.use(cors());
app.use(express.json());
app.use('/libros', libroRoutes);
app.use('/librosFiltroPrueba', libroFiltroRouter);

//Ejemplo desde el postman o Thunder Client
/*app.get('/', (req, res)=>{
    res.send('Hola mundo')
})
*/
try {
    await db.authenticate();
    console.log("Conexion exitosa prueba tecnica");
} catch (error) {
    console.error("Error en la conexion: " + error);

}

app.listen(8001, () => {
    console.log("Server up running in http://localhost:8001/");
});
