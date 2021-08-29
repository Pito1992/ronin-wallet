import classnames from 'classnames'
import { Input as AntdInput } from 'antd'
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
      {(label || labelSuffix) && (
        <div className={styles.labelWrapper}>
          {label && <label className={styles.label}>{label}</label>}
          {labelSuffix && <span className={styles.labelSuffix}>{labelSuffix}</span>}
        </div>
      )}
      <InputWrapper className={classnames(styles.input, className)} {...field} {...restProps}>
        {children}
      </InputWrapper>
    </div>
  )
}


export default Input
