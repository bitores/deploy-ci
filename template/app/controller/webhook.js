import {
  Controller,
  Post,
  Middleware
} from 'bitorjs-decorators';
const execFileSync = require('child_process').execFileSync;
const execFile = require('child_process').execFile; 
const exec = require('child_process').exec; 
const logger = require("lib/logger");
@Controller('/webhook')
export default class {

  @Post('/')
  @Middleware('GitlabPushEvent')
  async push(ctx, next){
    ctx.body = 'success';
    ctx.status = 200;
    try {
      // 构建
      await this.build(ctx, ctx.buildArgs);
      // 备份
      await this.resourceBackup();
      // 发布
      await this.publishing();
      // 数据库记录信息
      await this.writedbData();
    }catch(err) {
      logger.syncInfo("");
      throw err;
    }

    
  }
  // 构建
  async build(ctx, args){
    logger.syncInfo("开始构建")
    return new Promise((resolve, reject)=>{
      execFile(`${__dirname}/shell/build.sh`, args, {}, (err, stdout, stderr)=>{
        if(err) {
          logger.syncInfo("构建失败")
          reject(err)
        } else {
          logger.syncInfo("构建成功")
          resolve()
        }
      })
    })
  }
  // 提交数据到数据库
  async writedbData(){

  }
  // 备份：移动文件到备份目录
  async resourceBackup(){
    logger.syncInfo("备份数据")
  }
  // 发布：移动文件到正式环境
  async publishing(){
    logger.syncInfo("发布中")
  }
}