import { Get, Controller, Middleware, ReqParam, OnError } from 'jazeera/dist';
import { testMiddleware, testMiddleware2 } from './middlewares';
import { Request, Response, NextFunction, RequestHandler } from 'express';



@Controller('/test')
export default class TestController {

  @Middleware([testMiddleware, testMiddleware2])  
  @Get('/')
  public test1(req: Request, res: Response, next: NextFunction) {
    return res.status(200).json({ok: 'ok', locale: req['locale']});
  }


  @Get('/name/:name')
  public test2(@ReqParam('name') name: string, req: Request, res: Response, next: NextFunction) {
    return res.status(200).json({ok: `ok con param: ${name}`});
  }

  @Get('/error')
  @OnError(500)
  public test3(@ReqParam('name') name: string, req: Request, res: Response, next: NextFunction) {
    if (!name) {throw new Error}
    return res.status(200).json({ok: `ok con param: ${name}`});
  }

}