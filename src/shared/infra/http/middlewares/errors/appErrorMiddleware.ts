import { Request, Response, NextFunction } from 'express';
import AppError from '@shared/errors/AppError';

export async function appErrorMiddleware(err: Error, req: Request, res: Response, next: NextFunction): Promise<void | Response> {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return next(err);
}
