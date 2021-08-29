import React from 'react'
import classnames from 'classnames'
import styles from './control-center.module.scss'

function ControlCenter({ className, children }) {
  return (
    <div className={classnames(styles.controlCenter, className)}>
      {React.Children.map(children, (child) => (
        <child.type
          {...child.props}
          key={child.props.text}
        />
      ))}
    </div>
  )
}

export default ControlCenter
