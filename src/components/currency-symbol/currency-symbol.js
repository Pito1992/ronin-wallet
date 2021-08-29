import classnames from 'classnames'

import styles from './currency-symbol.module.scss'

function CurrencySymbol({ currencyCode, className, size }) {
  return <div className={classnames(styles.currencySymbol, styles[currencyCode], size && styles[size], className)} />
}

export default CurrencySymbol
