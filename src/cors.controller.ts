import { Controller, Get, Post, Put, Res, Options } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller('accounts')
export class CorsController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getMessage(@Res() res: Response): void {
    const message = 'Data is available';
    console.log('GET HANDLED');
    this.addCors(res);
    res.send({ message });
  }

  @Post('')
  postMessage(@Res() res: Response): void {
    const message = 'Data is posted';
    console.log('POST HANDLED');
    this.addCors(res);
    res.send({ message });
  }

  @Options('')
  optionMessage(@Res() res: Response): void {
    const message = 'Data is posted';
    console.log('OPTIONS HANDLED');
    //this.addCors(res);

    res.send(message);
  }
  addCors(res: Response) {
    //res.header('Access-Control-Allow-Origin', '');
    /* res.header('Access-Control-Allow-Methods', 'get,post,options');
    res.header('Access-Control-Allow-Headers', 'content-type, x-super-token');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Max-Age', '86400');*/
  }
}
