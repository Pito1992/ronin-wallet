import { useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Field } from 'formik'
import { Row, Col } from 'antd'
import classnames from 'classnames'

import { CURRENCY_CODE } from '../../constants/currency'
import { MAIN_URL } from '../../constants/urls'

import CurrencyBox from '../../components/currency-box'
import CurrencySymbol from '../../components/currency-symbol'
import FormatCurrency from '../../components/format-currency'
import Modal from '../../components/modal'
import Button from '../../components/button'
import Input from '../../components/input'
import TopBar from '../../components/top-bar'
import Container from '../../components/container'

import { ReactComponent as IconLayers } from '../../assets/svgs/layers.svg'

import user from '../../fixtures/user'
import wallets from '../../fixtures/wallet'
import currencyBoxesData from '../../fixtures/currencies'

import styles from './send-assets.module.scss'

function SendAssets() {
  const history = useHistory()
  const [isVisibleSelectionAssetModal, setVisibleSelectionAssetModal] = useState(false)

  const { walletId } = user
  const { wallet } = wallets[walletId]

  const onCloseModal = useCallback(() => setVisibleSelectionAssetModal(false), [])
  const onOpenModal = useCallback(() => setVisibleSelectionAssetModal(true), [])
  

  const onSubmit = (values, actions) => {
    actions.setSubmitting(true)
    console.log("🚀 ~ file: send-assets.js ~ line 38 ~ onSubmit ~ values", values)
    setTimeout(() => {
      actions.setSubmitting(false)
      Modal.success({
        title: 'Successfully sent',
        content: (
          <>
            <p>Your <strong>{values.asset}</strong> has been sent!</p>
            <p>Thank you for using our service</p>
          </>
        ),
        afterClose() {
          history.push(MAIN_URL)
        }
      });
    }, 1000)
  }

  return (
    <>
      <Container>
        <TopBar title="Send Assets" hasWayBack />
        <div className={styles.sendAssets}>
          <Formik
            initialValues={{
              from: wallet,
              to: '',
              asset: CURRENCY_CODE.EUR,
              amount: 0,
            }}
            enableReinitialize
            onSubmit={onSubmit}
          >
            {({ handleSubmit, isSubmitting, values, setFieldValue }) => {
              const selectedCurrency = currencyBoxesData[values.asset]
              const setAsset = (value) => {
                setFieldValue('asset', value)
                onCloseModal()
              }

              const setMaxAmount = () => {
                setFieldValue('amount', selectedCurrency.currency.balance)
              }

              return (
                <>
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <Input
                      type="text"
                      label="From"
                      prefix="My Wallet"
                      containerClassName={classnames(styles.inputContainer, styles.inputMyWallet)}
                      value={`(${wallet.slice(0, 4)}...${wallet.slice(-4)})`}
                      disabled
                      readOnly
                    />
                    <Field
                      type="text"
                      name="to"
                      label="To"
                      component={Input}
                      disabled={isSubmitting}
                      containerClassName={styles.inputContainer}
                    />
                    <Field
                      type="text"
                      name="asset"
                      label="Asset"
                      prefix={<CurrencySymbol currencyCode={values.asset} />}
                      suffix={<IconLayers />}
                      value={values.asset}
                      readOnly
                      onClick={onOpenModal}
                      disabled={isSubmitting}
                      component={Input}
                      containerClassName={styles.inputContainer}
                    />
                    <Field
                      type="number"
                      name="amount"
                      label="Amount"
                      labelSuffix={selectedCurrency?.base ? <span className={styles.availableAmount}>Available: <FormatCurrency value={selectedCurrency.currency?.balance} unit={selectedCurrency.base} /></span> : null}
                      suffix={<Button className={styles.btnMaxAmount} onClick={setMaxAmount} size="small">Max</Button>}
                      component={Input}
                      containerClassName={styles.inputContainer}
                      disabled={isSubmitting}
                      min={1}
                      max={selectedCurrency.currency.balance}
                    />
                    <Row gutter={[16, 16]} className={styles.btnGroup}>
                      <Col span={12}>
                        <Button
                          block
                          disabled={isSubmitting}
                          onClick={history.goBack}
                        >
                            Cancel
                        </Button>
                      </Col>
                      <Col span={12}>
                        <Button
                          block
                          type="primary"
                          htmlType="submit"
                          loading={isSubmitting}
                        >
                          Send
                        </Button>
                      </Col>
                    </Row>
                  </form>
                  <Modal
                    isVisible={isVisibleSelectionAssetModal}
                    onCancel={onCloseModal}
                    footer={null}
                  >
                    {Object.keys(currencyBoxesData).map((currencyCode) => (
                      <CurrencyBox key={currencyCode} className={styles.currencyBox} currencyCode={currencyCode} onClick={setAsset} />
                    ))}
                  </Modal>
                </>
              )
            }}
          </Formik>
        </div>
      </Container>
    </>
  )
}

export default SendAssets
