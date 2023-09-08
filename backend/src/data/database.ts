import mysql from 'mysql2';
import dotenv from 'dotenv'

dotenv.config();
// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE
// });

const db = mysql.createConnection({
    host: 'localhost',
    user: 'shopper',
    password: 'test_products',
    database: 'products_shopper',
});
db.connect((err) => {
    if (err) {
        console.log('Erro ao conectar o banco de dados', err)
    } else {
        console.log('Conexão com o banco de dados estabelecida')
    }
})
export default db