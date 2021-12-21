const sqlite3 = require('sqlite3').verbose();
const dbFile = './database/users.db';

const db = new sqlite3.Database(dbFile);

db.serialize(async () => {
    // const res = await new Promise((resolve, reject) => {
    //     db.all('SELECT * FROM users', (err, row) => {
    //         if (err) reject(err);
    //         resolve(row);
    //     })
    // })

    // console.log(res)

    db.all('SELECT * FROM users', (err, row) => {
        console.log(row);
    })
});

db.close();