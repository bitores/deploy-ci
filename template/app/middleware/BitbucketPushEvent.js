
// {
//   "eventKey":"repo:refs_changed",
//   "date":"2020-06-18T12:33:15+0800",
//   "actor":{
//       "name":"hzj@mochongsoft.com",
//       "emailAddress":"hzj@zmjx.com",
//       "id":210,
//       "displayName":"黄政杰",
//       "active":true,
//       "slug":"hzj_mochongsoft.com",
//       "type":"NORMAL"
//   },
//   "repository":{
//       "slug":"test-fe-ci",
//       "id":177,
//       "name":"test-fe-ci",
//       "scmId":"git",
//       "state":"AVAILABLE",
//       "statusMessage":"Available",
//       "forkable":true,
//       "project":{
//           "key":"FE",
//           "id":69,
//           "name":"fe",
//           "public":false,
//           "type":"NORMAL"
//       },
//       "public":false
//   },
//   "changes":[
//       {
//           "ref":{
//               "id":"refs/heads/master",
//               "displayId":"master",
//               "type":"BRANCH"
//           },
//           "refId":"refs/heads/master",
//           "fromHash":"e717c7ab9b4af797eaaa0eaa1c6cc37feb95acf9",
//           "toHash":"2c8d800855380cf89e0c4ffe9299ac0b1a2c818e",
//           "type":"UPDATE"
//       }
//   ]
// }
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
    ctx.message = 'from bitbucket'
  // }
 await next();
} 