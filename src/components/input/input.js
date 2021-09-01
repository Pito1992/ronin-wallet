import classnames from 'classnames'

import { Input as AntdInput } from 'antd'
import Label from '../label'

import styles from './input.module.scss'

function Input({
  inputType,
  className,
  containerClassName,
  children,
  label,
  labelSuffix,
  field = null,
  form,
  ...restProps
}) {
  const InputWrapper = inputType ? AntdInput[inputType] : AntdInput

  return (
    <div className={classnames(styles.container, containerClassName)}>
      <Label label={label} labelSuffix={labelSuffix} />
      <InputWrapper className={classnames(styles.input, className)} {...field} {...restProps}>
        {children}
      </InputWrapper>
    </div>
  )
}


export default Input
