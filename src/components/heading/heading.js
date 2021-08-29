import classnames from 'classnames'

import styles from './heading.module.scss'

function Heading({ level = '4', className, children }) {
  const HeadingTag = `h${level}`

  return (
    <HeadingTag className={classnames(styles.heading, className)}>{children}</HeadingTag>
  )
}

export default Heading
