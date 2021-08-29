import classnames from 'classnames'

import FormatCurrency from '../format-currency'
import CurrencySymbol from '../currency-symbol'

import currencyBoxesData from '../../fixtures/currencies'

import styles from './currency-box.module.scss'

function CurrencyBox({ className, currencyCode, onClick }) {
  const isClickable = typeof onClick === 'function'
  const Wrapper = isClickable ? 'button' : 'div'
  const { base, currency, rate } = currencyBoxesData[currencyCode]

  const onSelectCurrencyBox = () => onClick(currencyCode)
  
  return (
    <Wrapper className={classnames(styles.currencyBox, className, { [styles.isClickable]: isClickable })} {...isClickable && { onClick: onSelectCurrencyBox }}>
      <CurrencySymbol size="large" currencyCode={base} />
      <div className={styles.currencyContent}>
        <FormatCurrency className={styles.balance} value={currency.balance} unit={base} />
        <FormatCurrency className={styles.rate} value={currency.rates[rate]} unit={rate} />
      </div>
    </Wrapper>
  )
}

export default CurrencyBox
