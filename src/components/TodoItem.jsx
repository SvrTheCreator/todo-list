import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodoCompleted, changeText } from '../store/todoSlice'
import Modal from './Modal'

export default function TodoItem({ id, text, completed, time, date }) {
  const dispatch = useDispatch()
  const [newValue, setNewValue] = useState('')
  const [openChangeModal, setOpenChangeModal] = useState(false)

  const changeNewTodo = () => {
    if (newValue.trim().length) {
      dispatch(changeText({ id, newValue }))
      setNewValue('')
      setOpenChangeModal(false)
    }
    if (newValue.trim().length <= 0) {
      setOpenChangeModal(true)
      setNewValue('')
      alert('Не должно быть пустой строки')
    }
  }

  return (
    <>
      <li className='todo'>
        <div className='todo__content'>
          <div>
            <input
              type='checkbox'
              checked={completed}
              onChange={() => dispatch(toggleTodoCompleted({ id }))}
            />
            <span className='todo__text'>{text}</span>
            <div
              className='todo__delete gg-close'
              onClick={() => dispatch(removeTodo({ id }))}
            ></div>
          </div>
          <div>
            <div className='todo__date-time'>
              <div>{date}</div>
              <div>{time}</div>
            </div>
            <button
              style={{ cursor: 'pointer' }}
              onClick={() => setOpenChangeModal(true)}
              className='gg-edit-markup'
            ></button>
          </div>
        </div>
      </li>
      <Modal
        newValue={newValue}
        setNewValue={setNewValue}
        changeNewTodo={changeNewTodo}
        isOpen={openChangeModal}
        onClose={() => setOpenChangeModal(false)}
      />
    </>
  )
}
