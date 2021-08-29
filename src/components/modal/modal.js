import React from 'react'
import classnames from 'classnames'
import { Modal as AntdModal } from 'antd'

import styles from './modal.module.scss'

function Modal({ className, children, isVisible = false, width, ...props }) {
  return (
    <AntdModal
      {...props}
      wrapClassName={classnames(styles.modal, className)}
      title="Basic Modal"
      visible={isVisible}
      width={width || null}
      centered
    >
      {children}
    </AntdModal>
  )
}

function modalDecoration(ModalMethod) {
  return function({ className, width, ...restProps }) {
    ModalMethod({
      ...restProps,
      centered: true,
      width: width || null,
      className: classnames(styles.modalMethod, className),
    })
  }
}

Modal.info = modalDecoration(AntdModal.info)
Modal.success = modalDecoration(AntdModal.success)
Modal.confirm = modalDecoration(AntdModal.confirm)
Modal.error = modalDecoration(AntdModal.error)
Modal.warning = modalDecoration(AntdModal.warning)

export default Modal