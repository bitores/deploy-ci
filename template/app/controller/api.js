import {
  Controller,
  Get,
  Delete,
  Middleware
} from 'bitorjs-decorators';


@Controller('/')
export default class {

  @Get('/')
  @Middleware('a')
  async index(ctx){
    ctx.body = {};
  }
}