import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'luiz',
      sobrenome: 'gomes',
      email: 'lyhxr@example.com',
      idade: 18,
      peso: 80,
      altura: 1.75,
    });

    res.status(200).json(novoAluno);
  }
}

export default new HomeController();
