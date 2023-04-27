const mysql = require('mysql2');

const conn = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Portal_Synapse',
     
});


conn.connect((error) => {
    if(error) throw error;
    console.log(`Conectado ao banco`)
});

// exports.execute = (query, params=[]) => {
//     return new Promise((resolve, reject) => {
//         pool.query(query, params, (error, result, fields) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(result)
//             }
//         });
//     })
// }

module.exports = conn;