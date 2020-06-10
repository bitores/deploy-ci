import {
  Controller,
  Get,
  Delete,
  Middleware
} from 'bitorjs-decorators';


@Controller('/webhook')
export default class {

  @Get('/')
  async index(ctx,...params){
    console.log(params)
    ctx.body = "====sdfsd";
  }
}