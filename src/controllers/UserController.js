import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUsuario = await User.create(req.body);
      const { id, nome, email } = novoUsuario;

      return res.status(200).json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({ errors: ['Usuário não encontrado'] });
      }

      const { id, name, email } = user;

      return res.status(200).json({ id, name, email });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.userId;
      if (!id) {
        return res.status(400).json({ errors: ['ID não informado'] });
      }
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({ errors: ['Usuário não encontrado'] });
      }

      const novosDados = await user.update(req.body);

      return res.status(200).json(novosDados);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.userId;
      if (!id) {
        return res.status(400).json({ errors: ['ID não informado'] });
      }
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({ errors: ['Usuário não encontrado'] });
      }

      await user.destroy(req.body);

      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
