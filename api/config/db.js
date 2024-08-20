const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const connectionDB = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_COLLECTION,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

connectionDB.getConnection((err, connection) => {
    if (err) {
        console.error(err)
        return;
    }
    console.log("Database Connect!!!");
    connection.release();
});

module.exports = connectionDB;