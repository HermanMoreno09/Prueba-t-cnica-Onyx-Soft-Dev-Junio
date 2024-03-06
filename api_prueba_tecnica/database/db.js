import { Sequelize } from "sequelize"

const db = new Sequelize('libreria', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db