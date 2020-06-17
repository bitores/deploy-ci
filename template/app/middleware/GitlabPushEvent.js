

export default async (ctx, next) => {
  // // console.log('from middleware push event', ctx.request.body)
  // const {event_name,ref, user_username, project, repository} = ctx.request.body;
  // console.log(event_name,ref, user_username, project, repository)
  // if("tag_push" === event_name) {
  //   ctx.body = 'not support tag push'
  //   ctx.status = 404;
  // } else {
  //   // tag_push
  //   // push
    ctx.message = 'from gitlab'
  // }
 await next();
} 