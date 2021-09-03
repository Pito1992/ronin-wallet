import postUserCredentials from './iam/user-credentials/post'
import getUserWallet from './iam/user-wallet/get'

const jsonServer = require('json-server')

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
server.listen(apiPort, process.env.HOST, () => {
  console.log(`JSON Server is running on port ${apiPort}`) //eslint-disable-line
})
