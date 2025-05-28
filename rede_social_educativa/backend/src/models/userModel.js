const pool = require('../config/database');

class UserModel {
  static async getUserByEmail(email) {
    const [rows] = await pool.query('SELECT * FROM t_usuario WHERE c_email = ?', [email]);
    return rows[0];
  }

  static async createUser(email, hashedPassword, tipo) {
    const [result] = await pool.query(
      'INSERT INTO t_usuario (c_email, c_senha, c_tipo) VALUES (?, ?, ?)',
      [email, hashedPassword, tipo]
    );
    return result.insertId;
  }

  static async getUserById(userId) {
    const [rows] = await pool.query('SELECT * FROM t_usuario WHERE c_id_usuario = ?', [userId]);
    return rows[0];
  }

  static async updateUser(userId, userData) {
    const allowedFields = ['c_nome', 'c_email', 'c_tipo'];
    const updates = [];
    const values = [];

    Object.keys(userData).forEach(key => {
      if (allowedFields.includes(key)) {
        updates.push(`${key} = ?`);
        values.push(userData[key]);
      }
    });

    if (updates.length === 0) return false;

    values.push(userId);
    const [result] = await pool.query(
      `UPDATE t_usuario SET ${updates.join(', ')} WHERE c_id_usuario = ?`,
      values
    );

    return result.affectedRows > 0;
  }
}

module.exports = UserModel;