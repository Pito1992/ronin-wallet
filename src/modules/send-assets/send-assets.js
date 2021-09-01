import { useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { CURRENCY_CODE } from '../../constants/currency'
import { MAIN_URL } from '../../constants/urls'

import CurrencyBox from '../../components/currency-box'
import Modal from '../../components/modal'
import TopBar from '../../components/top-bar'
import Container from '../../components/container'
import Form from './partials/form'

import user from '../../fixtures/user'
import wallets from '../../fixtures/wallet'
import currencyBoxesData from '../../fixtures/currencies'

import styles from './send-assets.module.scss'

function SendAssets() {
  const history = useHistory()
  const [isVisibleSelectionAssetModal, setVisibleSelectionAssetModal] = useState(false)
  const [maxNumber, setMaxNumber] = useState(0)

  const onCloseModal = useCallback(() => setVisibleSelectionAssetModal(false), [])
  const onOpenModal = useCallback(() => setVisibleSelectionAssetModal(true), [])
  
  const { walletId } = user
  const { wallet } = wallets[walletId]

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

  const SendAssetsFormSchema = Yup.object().shape({
    to: Yup.string()
      .required('Input is required'),
    amount: Yup.number()
      .positive()
      .max(maxNumber)
      .required('Input is required'),
  })

  return (
    <>
      <Container direction="column">
        <TopBar title="Send Assets" hasWayBack />
        <div className={styles.sendAssets}>
          <Formik
            initialValues={{
              from: wallet,
              to: '',
              asset: CURRENCY_CODE.EUR,
              amount: 0,
            }}
            onSubmit={onSubmit}
            validationSchema={SendAssetsFormSchema}
          >
            {({ setFieldValue }) => {
              const setAsset = (value) => {
                setFieldValue('asset', value)
                onCloseModal()
              }

              return (
                <>
                  <Form
                    actions={{
                      setMaxNumber,
                      onCloseModal,
                      onOpenModal,
                    }}
                  />
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
