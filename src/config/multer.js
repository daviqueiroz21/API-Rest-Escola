import { extname, resolve } from 'path';

import multer from 'multer';

const aleatorio = () => Math.floor(Math.random() * 10000000 + 10000000);
export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/jpeg' || file.mimetype !== 'image/png') {
      return cb(new multer.MulterError('O arquivo deve ser uma imagem!'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename(req, file, cb) {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
