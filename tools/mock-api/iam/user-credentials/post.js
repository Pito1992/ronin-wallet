const user = require('../../../mock-data/user')

module.exports = function(server) {
  return server.post('/iam/user-credentials', (req, res) => {
    // const { password } = req.body
  
    // if (password !== '123456') {
    //   res.status(401).jsonp({
    //     message: 'Invalid password'
    //   })
    // } else {
    // }
  
    setTimeout(function() {
      res.status(200).jsonp(user.fixedUserData)
    }, 1000)
  })
}
