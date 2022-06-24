import { Request, Response, NextFunction } from 'express';
import { RateLimiterMemory } from 'rate-limiter-flexible';

import AppError from '@shared/errors/AppError';

const limiter = new RateLimiterMemory({
  points: 4,
  duration: 1,
});

export const raterLimiterMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await limiter.consume(req.ip);

    return next();
  } catch (err) {
    throw new AppError('Too many requests', 429);
  }
};
