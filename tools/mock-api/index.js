const jsonServer = require('json-server')
const postUserCredentials = require('./iam/user-credentials/post')
const getUserWallet = require('./iam/user-wallet/get')


require('dotenv').config()

const server = jsonServer.create()

server.use(jsonServer.defaults())
server.use(jsonServer.bodyParser)

const apiList = [
  postUserCredentials,
  getUserWallet,
]

apiList.forEach((apiFunc) => apiFunc(server))

const apiPort = process.env.MOCK_API_PORT || 3000
server.listen(apiPort, process.env.HOST, function() {
  console.log(`JSON Server is running on port ${apiPort}`) //eslint-disable-line
})
