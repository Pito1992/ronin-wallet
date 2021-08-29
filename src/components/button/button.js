import classnames from 'classnames'
import { Button as AntdButton } from 'antd'
import styles from './button.module.scss'

function Button({ className, children, size = 'large', ...restProps }) {
  return (
    <AntdButton className={classnames(styles.button, className)} size={size} {...restProps}>
      {children}
    </AntdButton>
  )
}

export default Button
