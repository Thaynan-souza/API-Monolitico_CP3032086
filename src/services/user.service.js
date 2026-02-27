const db = require('../database/db');

const criarUsuario = (nome, email) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO usuarios (nome, email) VALUES (?, ?)`;
        
        db.run(sql, [nome, email], function(err) {
            if (err) return reject(err);
            
            resolve({
                id: this.lastID,
                nome,
                email,
                status: 'ativo'
            });
        });
    });
};

const listarUsuarios = () => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM usuarios`;
        
        db.all(sql, [], (err, rows) => {
            if (err) return reject(err);
            resolve(rows); 
        });
    });
};

const buscarPorId = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM usuarios WHERE id = ?`;
        db.get(sql, [id], (err, row) => {
            if (err) return reject(err);
            resolve(row);
        });
    });
};

const atualizarUsuario = (id, nome, status) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE usuarios SET nome = ?, status = ? WHERE id = ?`;
        db.run(sql, [nome, status, id], function(err) {
            if (err) return reject(err);
            resolve(this.changes); 
        });
    });
};

const desativarUsuario = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE usuarios SET status = 'inativo' WHERE id = ?`;
        db.run(sql, [id], function(err) {
            if (err) return reject(err);
            resolve(this.changes);
        });
    });
};

module.exports = { criarUsuario, listarUsuarios, buscarPorId, atualizarUsuario, desativarUsuario };