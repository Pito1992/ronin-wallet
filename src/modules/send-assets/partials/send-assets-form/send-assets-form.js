import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Field, useFormikContext } from 'formik'
import { Row, Col, Form } from 'antd'
import classnames from 'classnames'

import CurrencySymbol from '../../../../components/currency-symbol'
import FormatCurrency from '../../../../components/format-currency'
import Button from '../../../../components/button'
import Input from '../../../../components/input'
import FormInput from '../../../../components/form-input'

import { ReactComponent as IconLayers } from '../../../../assets/svgs/layers.svg'

import { getUserWalletNumber, getCurrencyDataByCurrencyCode } from '../../../../redux/user-wallet/user-wallet-selectors'

import styles from './send-assets-form.module.scss'

function SendAssetsForm({ actions }) {
  const history = useHistory()
  const { values, handleSubmit, isSubmitting, setFieldValue } = useFormikContext()

  const wallet = useSelector(getUserWalletNumber)
  const { balance } = useSelector(getCurrencyDataByCurrencyCode(values.asset))

  const setMaxAmount = (event) => {
    event.preventDefault()
    setFieldValue('amount', balance)
  }

  useEffect(() => {
    actions.setMaxNumber(balance)
  }, [actions, balance])

  return (
    <>
      <Form onFinish={handleSubmit} layout="vertical" className={styles.form}>
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
          as={FormInput}
          disabled={isSubmitting}
          className={styles.inputContainer}
        />
        <Field
          type="text"
          name="asset"
          label="Asset"
          prefix={<CurrencySymbol currencyCode={values.asset} />}
          suffix={<IconLayers />}
          value={values.asset}
          readOnly
          onClick={actions.onOpenModal}
          disabled={isSubmitting}
          component={Input}
          containerClassName={styles.inputContainer}
        />
        <Field
          type="number"
          name="amount"
          label="Amount"
          labelSuffix={values.asset ? <span className={styles.availableAmount}>Available: <FormatCurrency value={balance} unit={values.asset} /></span> : null}
          suffix={<Button className={styles.btnMaxAmount} onClick={setMaxAmount} size="small">Max</Button>}
          as={FormInput}
          className={styles.inputContainer}
          disabled={isSubmitting}
          min={1}
          max={balance}
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
      </Form>
    </>
  )
}

export default SendAssetsForm
