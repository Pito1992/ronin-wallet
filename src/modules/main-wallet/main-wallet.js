import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import Heading from '../../components/heading'
import CurrencyBox from '../../components/currency-box'
import ControlCenter from '../../components/control-center'
import ControlItem from '../../components/control-item'
import WalletCard from '../../components/wallet-card'
import Container from '../../components/container'

import { SEND_ASSETS_URL } from '../../constants/urls'
import { CURRENCY_CODE } from '../../constants/currency'

import { ReactComponent as IconProfile } from '../../assets/svgs/person-fill.svg'
import { ReactComponent as IconDeposit } from '../../assets/svgs/credit-card-fill.svg'
import { ReactComponent as IconSend } from '../../assets/svgs/plane-fill.svg'
import { ReactComponent as IconSwap } from '../../assets/svgs/repeat.svg'

import user from '../../fixtures/user'

import styles from './main-wallet.module.scss'

function MainWallet() {
  const history = useHistory()
  const { name  } = user

  const onSendAssets = useCallback(() => history.push(SEND_ASSETS_URL), [history])

  return (
    <Container>
      <div className={styles.mainWallet}>
        <header className={styles.profile}>
          <div className={styles.profileName}>{name}</div>
          <div className={styles.profileSymbol}><IconProfile /></div>
        </header>
        <WalletCard />
        <ControlCenter>
          <ControlItem text="Deposit" icon={<IconDeposit />} disabled />
          <ControlItem text="Send" icon={<IconSend />} onClick={onSendAssets} />
          <ControlItem text="Swap" icon={<IconSwap />} disabled />
        </ControlCenter>
        <section>
          <Heading>Assets</Heading>
          {[CURRENCY_CODE.EUR, CURRENCY_CODE.YEN].map((currencyCode) => (
            <CurrencyBox key={currencyCode} className={styles.currencyBox} currencyCode={currencyCode} />
          ))}
        </section>
      </div>
    </Container>
  )
}

export default MainWallet
