import {
  Controller,
  Post,
  Middleware
} from 'bitorjs-decorators';
const execFileSync = require('child_process').execFileSync;
const execFile = require('child_process').execFile; 

@Controller('/webhook')
export default class {

  @Post('/')
  @Middleware('PushEvent')
  async push(ctx, next){
    // console.log(ctx.request.body)
    // ctx.body = "====sdfsd";
    ctx.body = 'success';
    ctx.status = 200;
    this.build(ctx, ctx.request.body).then(res=>{
      this.bakAssets();
    })
    
  }



  async build(ctx, ...args){
    console.log('args', ctx.message)
    // return new Promise((res, rej)=>{
    //   execFile(`../shell/build.sh`, args, {}, (err, stdout, stderr)=>{

    //   })
    // })
  }

  async bakAssets(){

  }
}