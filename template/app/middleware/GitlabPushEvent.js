

export default async (ctx, next) => {
  console.log('from middleware push event', ctx.request.body)
  const {event_name,ref, user_username, project, repository} = ctx.request.body;
  // console.log(event_name,ref, user_username, project, repository)
  if("tag_push" === event_name) {
    ctx.body = 'not support tag push'
    ctx.status = 404;
  } else if("push"=== event_name){
  //   // tag_push
  //   // push
    let repo = `${__dirname}/repo`,
        projectName = repository.name,
        gitUrl = repository.url,
        branch = ref.split("\/").pop(),
        mvUrl = `${__dirname}/env/${branch}/${projectName}`;

    ctx.buildArgs = [
      repo, // clonePath
      projectName, // projectName
      gitUrl,// git path
      branch, //branch event
      mvUrl // move to path
    ]
    
    // ctx.message = 'from gitlab'
  }
 await next();
} 