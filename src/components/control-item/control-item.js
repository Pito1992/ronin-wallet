import classnames from 'classnames'
import styles from './control-item.module.scss'

function ControlItem({ className, text, icon, disabled, onClick }) {
  return (
    <button type="button" className={classnames(styles.controlItem, className, { [styles.disabled]: disabled })} onClick={onClick}>
      <span className={styles.controlItemIcon}>
        {icon}
      </span>
      <span className={styles.controlItemText}>
        {text}
      </span>
    </button>
  )
}

export default ControlItem
