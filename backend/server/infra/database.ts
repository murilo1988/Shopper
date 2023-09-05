import mysql from 'mysql';

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

db.connect((err) => {
    if (err) {
        console.log('Erro ao conectar o banco de dados', err)
    } else {
        console.log('Conexão com o banco de dados estabelecida')
    }
})

export default db