import { Request, Response, NextFunction } from 'express';
import AppError from '@shared/errors/AppError';

export function appErrorMiddleware(err: Error, req: Request, res: Response, next: NextFunction): void | Response {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return next(err);
}
