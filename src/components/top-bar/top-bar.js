import React from 'react'
import { useHistory } from 'react-router-dom'

import { ReactComponent as IconChevronLeft } from '../../assets/svgs/chevron-left.svg'

import styles from './top-bar.module.scss'

function TopBar({ className, title, hasWayBack }) {
  const history = useHistory()

  return (
    <div className={styles.topBar}>
      {hasWayBack && (
        <button className={styles.btnGoBack} onClick={history.goBack}>
          <IconChevronLeft />
        </button>
      )}
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default TopBar