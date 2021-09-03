import { useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Heading from '../../components/heading'
import CurrencyBox from '../../components/currency-box'
import ControlCenter from '../../components/control-center'
import ControlItem from '../../components/control-item'
import WalletCard from '../../components/wallet-card'
import Container from '../../components/container'

import { SEND_ASSETS_URL } from '../../constants/urls'

import { ReactComponent as IconProfile } from '../../assets/svgs/person-fill.svg'
import { ReactComponent as IconDeposit } from '../../assets/svgs/credit-card-fill.svg'
import { ReactComponent as IconSend } from '../../assets/svgs/plane-fill.svg'
import { ReactComponent as IconSwap } from '../../assets/svgs/repeat.svg'

import { getAuthUser } from '../../redux/authentication/authentication-selectors'
import { getUserWallet } from '../../redux/user-wallet/user-wallet-actions'
import { getUserWalletData, getAvailableCurrencies } from '../../redux/user-wallet/user-wallet-selectors'

import styles from './main-wallet.module.scss'

function MainWallet() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { name } = useSelector(getAuthUser)
  const { wallet, currencies = {}, mainCurrency } = useSelector(getUserWalletData)
  const availableCurrencies = useSelector(getAvailableCurrencies)
  const availableCurrenciesWithoutMainCurrency = availableCurrencies.filter((currencyCode) => (currencyCode !== mainCurrency))

  const onSendAssets = useCallback(() => history.push(SEND_ASSETS_URL), [history])

  useEffect(() => {
    dispatch(getUserWallet())
  }, [dispatch])

  return (
    <Container>
      <div className={styles.mainWallet}>
        <header className={styles.profile}>
          <div className={styles.profileName}>{name}</div>
          <div className={styles.profileSymbol}><IconProfile /></div>
        </header>
        <WalletCard wallet={wallet} currencies={currencies} />
        <ControlCenter>
          <ControlItem text="Deposit" icon={<IconDeposit />} disabled />
          <ControlItem text="Send" icon={<IconSend />} onClick={onSendAssets} />
          <ControlItem text="Swap" icon={<IconSwap />} disabled />
        </ControlCenter>
        <section>
          <Heading>Assets</Heading>
          {availableCurrenciesWithoutMainCurrency.map((currencyCode) => (
            <CurrencyBox key={currencyCode} currencyCode={currencyCode} className={styles.currencyBox} />
          ))}
        </section>
      </div>
    </Container>
  )
}

export default MainWallet
