const sqlite3 = require('sqlite3').verbose();
const dbFile = './database/users.db';
const { v4: uuidv4 } = require('uuid');

const db = new sqlite3.Database(dbFile);

db.serialize(() => {

  // Khai báo table
  const sql = `CREATE TABLE "users" (
    "id"	STRING NOT NULL PRIMARY KEY,
    "name" STRING,
    "username"	TEXT
  )`

  //Tạo cơ sở dữ liệu
  db.run(sql);

  // Thêm bản ghi vào cơ sở dữ liệu
  const stmt = db.prepare("INSERT INTO users (id, name, username) VALUES (?, ?, ?)");

  for (let i = 1; i < 6; i++) {
    stmt.run(uuidv4(), "user " + i, "User thứ " + i);
  }
  stmt.finalize();

});

db.close();