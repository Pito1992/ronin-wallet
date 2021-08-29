import classnames from 'classnames'

import styles from './container.module.scss'

function Container({ className, children }) {
  return <div className={classnames(styles.container, className)}>{children}</div>
}

export default Container
