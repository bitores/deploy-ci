import {
  Controller,
  Post,
  Middleware
} from 'bitorjs-decorators';
const execFileSync = require('child_process').execFileSync;
const execFile = require('child_process').execFile; 
const exec = require('child_process').exec; 
const logger = require("../lib/logger");
@Controller('/webhook')
export default class {

  @Post('/')
  @Middleware('GitlabPushEvent')
  async push(ctx, next){
    console.log('....');
    try {
      // 构建
      const res = this.build(ctx, ctx.request.body);
      // 备份
      this.resourceBackup();
      // 发布
      this.publishing();
      // 数据库记录信息
      this.writedbData();
    }catch(err) {
      logger.syncInfo("");
      throw err;
    }

    ctx.body = 'success';
    ctx.status = 200;
  }
  // 构建
  async build(ctx, ...args){
    logger.syncInfo("开始构建")
    return new Promise((resolve, reject)=>{
      exec(`
mkdir -p $1;
cd $1;

if [ ! -d $2 ]; then
    git clone $3;
fi

cd $2;
git checkout $4;
git pull origin $4;

npm install;
npm run build;

mkdir -p $5;

cp -r dist/* $5;
      `, args, (err, stdout, stderr)=>{
        // execFile(`../shell/build.sh`, args, {}, (err, stdout, stderr)=>{
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