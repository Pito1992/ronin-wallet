import classnames from 'classnames'
import styles from './label.module.scss'

function Input({
  className,
  label,
  labelSuffix,
}) {
  return (label || labelSuffix) ? (
    <div className={classnames(styles.wrapper, className)}>
      {label && <span className={styles.label}>{label}</span>}
      {labelSuffix && <span className={styles.labelSuffix}>{labelSuffix}</span>}
    </div>
  ) : null
}


export default Input
