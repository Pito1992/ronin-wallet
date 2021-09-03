import { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Field } from 'formik'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import * as Yup from 'yup'
import { Form } from 'antd'

import { MAIN_URL } from '../../constants/urls'

import Button from '../../components/button'
import FormInput from '../../components/form-input'
import Container from '../../components/container'

import { userLogin } from '../../redux/authentication/authentication-actions'
import { getAuthLoading, getAuthError, getUserToken } from '../../redux/authentication/authentication-selectors'

import { ReactComponent as Logo } from '../../assets/svgs/logo.svg'

import styles from './unlock-wallet.module.scss'

function UnlockWallet() {
  const formikRef = useRef()
  const history = useHistory()
  const dispatch = useDispatch()
  const isAuthenticating = useSelector(getAuthLoading)
  const error = useSelector(getAuthError)
  const token = useSelector(getUserToken)

  const onSubmit = ({ password }, actions) => {
    actions.setSubmitting(true)
    dispatch(userLogin({ password }))
  }

  const UnlockWalletFormSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required'),
  })

  useEffect(() => {
    formikRef?.current?.setSubmitting(isAuthenticating)
  }, [formikRef, isAuthenticating])

  useEffect(() => {
    if (error && formikRef) {
      formikRef?.current?.setFieldError('password', error?.message)
    }
  }, [formikRef, error])

  useEffect(() => {
    token && history.push(MAIN_URL)
  }, [token, history])

  return (
    <Container>
      <div className={styles.unlockWallet}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <h1 className={styles.title}>Ronin Wallet</h1>
        <h2 className={styles.subTitle}>Your Digital Passport</h2>
        <Formik
          innerRef={formikRef}
          initialValues={{ password: '' }}
          onSubmit={onSubmit}
          validationSchema={UnlockWalletFormSchema}
        >
          {({ handleSubmit, values, isSubmitting }) => (
            <Form onFinish={handleSubmit} layout="vertical">
              <Field
                name="password"
                inputClassName={styles.inputUnlock}
                inputType="Password"
                label="Enter password"
                iconRender={visible => (visible ? <EyeInvisibleOutlined /> : <EyeTwoTone />)}
                as={FormInput}
              />
              <Button className={styles.ctaUnlock} type="primary" htmlType="submit" disabled={!values.password.length} loading={isSubmitting} >Unlock</Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  )
}

export default UnlockWallet
