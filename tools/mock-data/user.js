const faker = require('faker')
const jwt = require('jsonwebtoken')

const username = 'Ronin Wallet'

const fixedUserData = {
  id: faker.datatype.uuid(),
  name: username,
  walletId: '7300-3777-3888-3334',
  token: jwt.sign({ username }, 'secret'),
}

function genarateUserData(index) {
  faker.seed(index)
  const username = faker.name.findName()
  return ({
    id: faker.datatype.uuid(),
    name: username,
    walletId: faker.finance.creditCardNumber(),
    token: jwt.sign({ username }, 'secret'),
  })
}

const userData = [...Array(9)].map(genarateUserData)
userData.push(fixedUserData)

module.exports = {
  fixedUserData,
  userData,
}

