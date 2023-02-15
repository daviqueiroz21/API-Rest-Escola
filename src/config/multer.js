import { extname, resolve } from 'path';

import multer from 'multer';

const aleatorio = () => Math.floor(Math.random() * 10000000 + 10000000);
export default {
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename(req, file, cb) {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
