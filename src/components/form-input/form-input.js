import classnames from 'classnames'
import { useField } from 'formik'
import { Form } from 'antd'

import Input from '../input'
import Label from '../label'

import styles from './form-input.module.scss'

function FormInput({ name, label, labelSuffix, className, inputClassName, ...props }) {
  const [field, meta] = useField(name)
  const { error, touched } = meta

  return (
    <Form.Item
      label={<Label label={label} labelSuffix={labelSuffix} />} 
      validateStatus={touched && error && 'error'}
      help={touched && error}
      className={classnames(styles.formItem, className)}
    >
      <Input
        {...field}
        {...props}
        name={name}
        containerClassName={classnames(styles.inputContainer, inputClassName)}
        />
    </Form.Item>
  )
}

export default FormInput