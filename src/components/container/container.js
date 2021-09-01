import classnames from 'classnames'

import styles from './container.module.scss'

function Container({ className, direction, children }) {
  return <div className={classnames(styles.container, className, styles[direction])}>{children}</div>
}

export default Container
