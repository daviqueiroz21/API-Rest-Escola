import multer from 'multer';
import Aluno from '../models/Aluno';
import multerConfig from '../config/multer';

const upload = multer(multerConfig).single('foto');

class FotoController {
  async store(req, res) {
    return upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ errors: [err.code] });
      }

      return res.status(200).json(req.file);
    });
  }
}

export default new FotoController();
