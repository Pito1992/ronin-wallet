import classnames from 'classnames'
import { useSelector } from 'react-redux'

import FormatCurrency from '../format-currency'
import CurrencySymbol from '../currency-symbol'

import { getUserWalletBase, getCurrencyDataByCurrencyCode } from '../../redux/user-wallet/user-wallet-selectors'

import styles from './currency-box.module.scss'

function CurrencyBox({ className, onClick, currencyCode }) {
  const isClickable = typeof onClick === 'function'
  const Wrapper = isClickable ? 'button' : 'div'
  const { base } = useSelector(getUserWalletBase)
  const { balance, rates = {} } = useSelector(getCurrencyDataByCurrencyCode(currencyCode))

  const onSelectCurrencyBox = () => onClick(currencyCode)
  
  return (
    <Wrapper className={classnames(styles.currencyBox, className, { [styles.isClickable]: isClickable })} {...isClickable && { onClick: onSelectCurrencyBox }}>
      <CurrencySymbol size="large" currencyCode={currencyCode} />
      <div className={styles.currencyContent}>
        <FormatCurrency className={styles.balance} value={balance} unit={currencyCode} />
        <FormatCurrency className={styles.rate} value={rates[base]} unit={currencyCode} />
      </div>
    </Wrapper>
  )
}

export default CurrencyBox
