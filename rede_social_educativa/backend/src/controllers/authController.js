const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');

class AuthController {
  static async register(req, res) {
    try {
      const { email, senha, tipo } = req.body;

      if (!email || !senha || !tipo) {
        return res.status(400).json({ message: 'Preencha todos os campos' });
      }

      const existingUser = await UserModel.getUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: 'Email já cadastrado' });
      }

      const hashedPassword = await bcrypt.hash(senha, 10);
      const userId = await UserModel.createUser(email, hashedPassword, tipo);

      res.status(201).json({ message: 'Usuário criado com sucesso', userId });
    } catch (error) {
      console.error('Register error:', error);
      res.status(500).json({ message: 'Erro ao registrar usuário' });
    }
  }

  static async login(req, res) {
    try {
      const { email, senha } = req.body;
      
      if (!email || !senha) {
        return res.status(400).json({ message: 'Preencha todos os campos' });
      }

      const user = await UserModel.getUserByEmail(email);
      if (!user) {
        return res.status(400).json({ message: 'Usuário ou senha incorretos' });
      }

      const passwordMatch = await bcrypt.compare(senha, user.c_senha);
      if (!passwordMatch) {
        return res.status(400).json({ message: 'Usuário ou senha incorretos' });
      }

      const token = jwt.sign(
        { userId: user.c_id_usuario, tipo: user.c_tipo },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );

      res.json({ token, tipo: user.c_tipo });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Erro ao fazer login' });
    }
  }
}

module.exports = AuthController;