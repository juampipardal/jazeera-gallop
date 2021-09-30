import { Request, Response, NextFunction, RequestHandler } from 'express';

export const testMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log('test-middleware', req, res);
    next();
}
  
export  const testMiddleware2 = (req: Request, res: Response, next: NextFunction) => {
    console.log('test-middleware-2', req, res);
    next();
  }