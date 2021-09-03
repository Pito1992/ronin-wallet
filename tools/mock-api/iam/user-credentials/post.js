import { fixedUserData } from '../../../mock-data/user'

export default (server) => server.post('/iam/user-credentials', (req, res) => {
  // const { password } = req.body

  // if (password !== '123456') {
  //   res.status(401).jsonp({
  //     message: 'Invalid password'
  //   })
  // } else {
  // }

  setTimeout(() => {
    res.status(200).jsonp(fixedUserData)
  }, 1000)
})
