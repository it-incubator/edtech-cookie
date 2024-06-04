import { Controller, Get, Put, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('common')
  getMessage(): string {
    return this.appService.getHello();
  }

  /*@Put('update')
  updateCookie(): string {
    
  }*/

  @Get('create-cookie')
  createCookie(@Res() res: Response): void {
    res.cookie('server-cookie', 'value', {
      domain: '.cat.xxx',
      httpOnly: true,
      /* secure: true,
      sameSite: 'none',
      maxAge: 400000,*/
    });

    res.send('Cookie has been set');
  }
}
