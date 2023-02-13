import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUsuario = await User.create(req.body);

      return res.status(200).json(novoUsuario);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error.errors);
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
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
      const { id } = req.params;
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
