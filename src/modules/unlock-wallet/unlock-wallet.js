import { useHistory } from 'react-router-dom'
import { Formik, Field } from 'formik'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import * as Yup from 'yup'
import { Form } from 'antd'

import { MAIN_URL } from '../../constants/urls'

import Button from '../../components/button'
import FormInput from '../../components/form-input'
import Container from '../../components/container'

import { ReactComponent as Logo } from '../../assets/svgs/logo.svg'

import styles from './unlock-wallet.module.scss'

function UnlockWallet() {
  const history = useHistory()
  const onSubmit = (values, actions) => {
    actions.setSubmitting(true)
    console.log("🚀 ~ file: unlock-wallet.js ~ line 24 ~ UnlockWallet ~ values", values)
    setTimeout(() => {
      history.push(MAIN_URL)
      actions.setSubmitting(false)
    }, 1000)
  }

  const UnlockWalletFormSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required'),
  })

  return (
    <Container>
      <div className={styles.unlockWallet}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <h1 className={styles.title}>Ronin Wallet</h1>
        <h2 className={styles.subTitle}>Your Digital Passport</h2>
        <Formik
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
