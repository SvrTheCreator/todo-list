import React from 'react'

export default function Modal({
  newValue,
  setNewValue,
  changeNewTodo,
  isOpen,
  onClose,
}) {
  return (
    <>
      {isOpen && (
        <div className='modal'>
          <div className='modal__wrapper'>
            <div className='modal__content'>
              <h2>Change Todo</h2>
              <input
                className='modal__input'
                onChange={(e) => setNewValue(e.target.value)}
                value={newValue}
                type='text'
              />
              <div>
                <button
                  className='modal__change-button'
                  style={{ cursor: 'pointer' }}
                  onClick={changeNewTodo}
                >
                  Change
                </button>
                <button
                  className='modal__close-button gg-close'
                  onClick={onClose}
                ></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
