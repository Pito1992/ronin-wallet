import { useCallback } from 'react'
import copy from 'copy-to-clipboard'

import FormatCurrency from '../../components/format-currency'

import { CURRENCY_CODE } from '../../constants/currency'

import { ReactComponent as IconCopy } from '../../assets/svgs/copy.svg'
import { ReactComponent as Logo } from '../../assets/svgs/logo-light.svg'

import styles from './wallet-card.module.scss'

function WalletCard({ wallet, currencies = {} }) {
  const onCopyCardNumber = useCallback(() => copy(wallet), [wallet])

  return (
    <section className={styles.container}>
      <div className={styles.headline}>
        My Wallet
        {wallet && (
          <>
            <span className={styles.cardNumber}>{`(${wallet})`}</span>
            <button type="button" className={styles.copyCardNumber} onClick={onCopyCardNumber}>
              <IconCopy />
            </button>
          </>
        )}
      </div>
      <FormatCurrency
        className={styles.balance}
        value={currencies[CURRENCY_CODE.USD]?.balance}
        unit={CURRENCY_CODE.USD}
      />
      <FormatCurrency
        className={styles.rate}
        value={currencies[CURRENCY_CODE.USD]?.rates[CURRENCY_CODE.VND]}
        unit={CURRENCY_CODE.VND}
      />
      <div className={styles.logo}>
        <Logo />
      </div>
    </section>
  )
}

export default WalletCard
