const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../../database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        return console.error('Erro no SQLite:', err.message);
    }
    
    console.log('SQLite conectado.');

    const sql = `
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            status TEXT NOT NULL DEFAULT 'ativo',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `;

    db.run(sql, (err) => {
        if (err) console.error('Erro ao criar tabela:', err.message);
    });
});

module.exports = db;