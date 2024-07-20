import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodoCompleted, changeText } from '../store/todoSlice'
import ModalWindow from './Modal'
import { Card } from 'antd'
import { CloseOutlined, EditOutlined } from '@ant-design/icons'

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
        <Card className='todo__content'>
          <div className='todo__upper-content'>
            <input
              type='checkbox'
              checked={completed}
              onChange={() => dispatch(toggleTodoCompleted({ id }))}
            />
            {/* <span className='todo__text'>{text}</span> */}
            <span className='todo__text'>{text}</span>
            {/* <div
              className='todo__delete gg-close'
              onClick={() => dispatch(removeTodo({ id }))}
            ></div> */}
            <CloseOutlined onClick={() => dispatch(removeTodo({ id }))} />
          </div>
          <div className='todo__down-content'>
            <div className='todo__date-time'>
              <div>{date}</div>
              <div>{time}</div>
            </div>
            <EditOutlined
              style={{ cursor: 'pointer' }}
              onClick={() => setOpenChangeModal(true)}
            />
            {/* <button
              style={{ cursor: 'pointer' }}
              onClick={() => setOpenChangeModal(true)}
              // className='gg-edit-markup'
            >
              <EditOutlined />
            </button> */}
            {/* <button
              style={{ cursor: 'pointer' }}
              onClick={() => setOpenChangeModal(true)}
              // className='gg-edit-markup'
            ></button> */}
          </div>
        </Card>
      </li>
      <ModalWindow
        newValue={newValue}
        setNewValue={setNewValue}
        changeNewTodo={changeNewTodo}
        isOpen={openChangeModal}
        onClose={() => setOpenChangeModal(false)}
      />
    </>
  )
}
