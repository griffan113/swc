import { Request, Response, NextFunction } from 'express';
import { isCelebrateError } from 'celebrate';

export function celebrateErrorMiddleware(err: Error, req: Request, res: Response, next: NextFunction): Response | void {
  if (isCelebrateError(err)) {
    const errorObject = {};

    err.details.forEach(details => Object.assign(errorObject, { message: details.details.map(item => item.message)[0] }));

    return res.send(errorObject);
  }

  return next(err);
}
