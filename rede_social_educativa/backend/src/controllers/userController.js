const UserModel = require('../models/userModel');

class UserController {
  static async getProfile(req, res) {
    try {
      const userId = req.user.userId;
      const user = await UserModel.getUserById(userId);
      
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      
      const { c_senha, ...userProfile } = user;
      
      res.json(userProfile);
    } catch (error) {
      console.error('Get profile error:', error);
      res.status(500).json({ message: 'Erro ao buscar perfil do usuário' });
    }
  }

  static async updateProfile(req, res) {
    try {
      const userId = req.user.userId;
      const updateResult = await UserModel.updateUser(userId, req.body);
      
      if (!updateResult) {
        return res.status(400).json({ message: 'Nenhum dado válido para atualização' });
      }
      
      res.json({ message: 'Perfil atualizado com sucesso' });
    } catch (error) {
      console.error('Update profile error:', error);
      res.status(500).json({ message: 'Erro ao atualizar perfil' });
    }
  }
}

module.exports = UserController;