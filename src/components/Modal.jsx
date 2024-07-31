import React from 'react'
import { Button, Modal, Input, Typography } from 'antd'

const { Title } = Typography

export default function ModalWindow({
  newValue,
  setNewValue,
  changeNewTodo,
  isOpen,
  onClose,
  handleKeyPress,
}) {
  return (
    <>
      {isOpen && (
        <Modal className='modal' open={isOpen} onCancel={onClose} footer={null}>
          <div className='modal__wrapper'>
            <div
              className='modal__content'
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
              }}
            >
              <Title level={2} style={{ color: '#1677ff' }}>
                Change Todo
              </Title>
              <Input
                onKeyDown={handleKeyPress}
                className='modal__input'
                onChange={(e) => setNewValue(e.target.value)}
                value={newValue}
                type='text'
              />
              <div>
                <Button
                  className='modal__change-button'
                  style={{ cursor: 'pointer' }}
                  onClick={changeNewTodo}
                >
                  Change
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
