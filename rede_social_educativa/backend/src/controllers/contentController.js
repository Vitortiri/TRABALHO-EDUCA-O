class ContentController {
  static async getContentList(req, res) {
    try {
      res.json({ message: 'Content list endpoint' });
    } catch (error) {
      console.error('Get content list error:', error);
      res.status(500).json({ message: 'Erro ao buscar conteúdos' });
    }
  }

  static async createContent(req, res) {
    try {
      res.status(201).json({ message: 'Content creation endpoint' });
    } catch (error) {
      console.error('Create content error:', error);
      res.status(500).json({ message: 'Erro ao criar conteúdo' });
    }
  }
}

module.exports = ContentController;