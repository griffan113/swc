import { Request, Response, NextFunction } from 'express';
import { isCelebrateError } from 'celebrate';

export async function celebrateErrorMiddleware(err: Error, req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  if (isCelebrateError(err)) {
    const errorObject = {};

    err.details.forEach(details => Object.assign(errorObject, { message: details.details.map(item => item.message)[0] }));

    return res.status(400).send(errorObject);
  }

  return next(err);
}
