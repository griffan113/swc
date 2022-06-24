import path from 'path';
import crypto from 'crypto';
import multer, { StorageEngine } from 'multer';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

interface IUploaderConfig {
  driver: string;
  tmpFolder: string;
  uploadsFolder: string;
  multer: { storage: StorageEngine };
  config: {
    disk: unknown;
    aws: {
      bucket: string;
    };
  };
}

export default {
  driver: process.env.STORAGE_DRIVER || 'disk',
  tmpFolder,
  uploadsFolder: path.resolve(tmpFolder, 'uploads'),
  multer: {
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename(req, file, call) {
        const filehash = crypto.randomBytes(10).toString('hex');
        const fileName = `${filehash}-${file.originalname}`;

        return call(null, fileName);
      },
    }),
  },

  config: {
    disk: {},
    aws: {
      bucket: 'example-bucket',
    },
  },
} as IUploaderConfig;
