import user from './user'
import wallets from './wallet'

import { CURRENCY_CODE } from '../constants/currency'

const { walletId } = user
const { base, currencies } = wallets[walletId]

const currencyBoxesData = {
  [CURRENCY_CODE.USD]: {
    base: CURRENCY_CODE.USD,
    rate: base,
    currency: currencies[CURRENCY_CODE.USD],
  },
  [CURRENCY_CODE.EUR]: {
    base: CURRENCY_CODE.EUR,
    rate: base,
    currency: currencies[CURRENCY_CODE.EUR],
  },
  [CURRENCY_CODE.YEN]: {
    base: CURRENCY_CODE.YEN,
    rate: base,
    currency: currencies[CURRENCY_CODE.YEN],
  }
}

export default currencyBoxesData
