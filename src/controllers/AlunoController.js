import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'email', 'sobrenome', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['filename'],
      },
    });
    res.status(200).json(alunos);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ['Por gentileza informe o Id'] });
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'email', 'sobrenome', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['filename'],
        },
      });

      if (!aluno) {
        return res.status(404).json({ errors: ['Aluno não encontrado'] });
      }

      return res.status(200).json(aluno);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async store(req, res) {
    try {
      const {
        nome, sobrenome, email, idade, peso, altura,
      } = req.body;

      if (!nome) {
        return res.status(400).json({ errors: ['Por gentileza informe o nome do aluno(a)'] });
      }
      if (!sobrenome) {
        return res.status(400).json({ errors: ['Por gentileza informe o sobrenome do aluno(a)'] });
      }
      if (!email) {
        return res.status(400).json({ errors: ['Por gentileza informe o email do aluno(a)'] });
      }
      if (!idade) {
        return res.status(400).json({ errors: ['Por gentileza informe a idade do aluno(a)'] });
      }
      if (!altura) {
        return res.status(400).json({ errors: ['Por gentileza informe a altura do aluno(a)'] });
      }
      if (!peso) {
        return res.status(400).json({ errors: ['Por gentileza informe o peso do aluno(a)'] });
      }
      const aluno = await Aluno.create(req.body);

      return res.status(201).json(aluno);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ['Por gentileza informe o Id'] });
      }

      const aluno = await Aluno.findByPk(req.userId);

      if (!aluno) {
        return res.status(404).json({ errors: ['Aluno não encontrado'] });
      }

      const alunoAtualizado = await aluno.update(req.body);

      return res.status(200).json(alunoAtualizado);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ['Por gentileza informe o Id'] });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(404).json({ errors: ['Aluno não encontrado'] });
      }

      await aluno.destroy();

      return res.status(200).json({ apagado: true });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

export default new AlunoController();
