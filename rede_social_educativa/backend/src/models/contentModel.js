const pool = require('../config/database');

class ContentModel {
  static async getAllContent() {
    const [rows] = await pool.query('SELECT * FROM t_conteudo ORDER BY c_data_criacao DESC');
    return rows;
  }

  static async createContent(contentData, userId) {
    const { titulo, descricao, tipo } = contentData;
    
    const [result] = await pool.query(
      'INSERT INTO t_conteudo (c_titulo, c_descricao, c_tipo, c_id_usuario) VALUES (?, ?, ?, ?)',
      [titulo, descricao, tipo, userId]
    );
    
    return result.insertId;
  }
}

module.exports = ContentModel;