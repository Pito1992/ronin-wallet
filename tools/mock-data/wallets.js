import faker from 'faker'
import userData from './user'

const fixedUserWallet = {
  wallet: '7300 3777 3888 3334',
  base: 'VND',
  mainCurrency: 'USD',
  currencies: {
    'USD': {
      balance: 1000,
      rates: {
        'VND': 23046000,
      }
    },
    'EUR': {
      balance: 50,
      rates: {
        'VND': 1531972,
      }
    },
    'YEN': {
      balance: 10e5,
      rates: {
        'VND': 2103317,
      }
    }
  }
}

function genarateUserWallet({ walletId }, index) {
  console.log("🚀 ~ file: wallets.js ~ line 33 ~ genarateUserWallet ~ walletId", walletId)
  faker.seed(index)
  const dollar = faker.datatype.number({ min: 0, max: 10000 })
  const euro = faker.datatype.number({ min: 0, max: 10000 })
  const yen = faker.datatype.number({ min: 0, max: 10000 })
  return ({
    [walletId]: {
      wallet: walletId.replace(/\-/g, ' '),
      base: 'VND',
      mainCurrency: 'USD',
      currencies: {
        'USD': {
          balance: dollar,
          rates: {
            'VND': dollar * 23046000,
          }
        },
        'EUR': {
          balance: euro,
          rates: {
            'VND': euro * 30639.44,
          }
        },
        'YEN': {
          balance: yen,
          rates: {
            'VND': yen * 21.03317,
          }
        }
      }
    }
  })
}

const walletData = userData.reduce((acc, data) => {
  return {
    ...acc,
    ...genarateUserWallet(data),
  }
}, {})
walletData['7300-3777-3888-3334'] = fixedUserWallet

export default walletData