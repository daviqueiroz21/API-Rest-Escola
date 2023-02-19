import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    return res.status(200).json('Author: Davi Queiroz');
  }
}

export default new HomeController();
