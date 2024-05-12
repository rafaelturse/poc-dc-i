const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3307',
    database: 'dynacert_intranetDB'
})

connection.connect((e) => {
    if (e) {
        console.error('Fail to connect to database:', e)
    } else {
        console.log('Successfully connected to the database')
        console.log("##############################################")
    }
})

module.exports = connection;