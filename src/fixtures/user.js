import jwt from 'jsonwebtoken'

const username = 'Ronin Wallet'
const jwtAccessToken = jwt.sign({ username }, 'secret')

const user = {
  id: '42bb2282-096b-11ec-9a03-0242ac130003',
  name: username,
  walletId: '7300-3777-3888-3334',
  token: jwtAccessToken,
}

export default user