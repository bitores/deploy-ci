var ldap = require('ldapjs');
 
// // 服务端
// var server = ldap.createServer();
 
// server.search('dc=example', function(req, res, next) {
//   var obj = {
//     dn: req.dn.toString(),
//     attributes: {
//       objectclass: ['organization', 'top'],
//       o: 'example'
//     }
//   };
 
//   if (req.filter.matches(obj.attributes))
//   res.send(obj);
 
//   res.end();
// });
 
// server.listen(1389, function() {
//   console.log('ldapjs listening at ' + server.url);
// });

// // 客户端面
// ldap.Attribute.settings.guid_format = ldap.GUID_FORMAT_B;
 
// var client = ldap.createClient({
//   url: 'ldap://127.0.0.1/CN=test,OU=Development,DC=Home'
// });
 
// var opts = {
//   filter: '(objectclass=user)',
//   scope: 'sub',
//   attributes: ['objectGUID']
// };
 
// client.bind('username', 'password', function (err) {
//   client.search('CN=test,OU=Development,DC=Home', opts, function (err, search) {
//     search.on('searchEntry', function (entry) {
//       var user = entry.object;
//       console.log(user.objectGUID);
//     });
//   });
// });