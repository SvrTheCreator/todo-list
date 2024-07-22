import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodoCompleted, changeText } from '../store/todoSlice'
import ModalWindow from './Modal'
import { Card, Switch } from 'antd'
import { CloseOutlined, EditOutlined, CheckOutlined } from '@ant-design/icons'

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
          {/* <div className='todo__upper-content'> */}
          <Switch
            className='todo__checked-input'
            type='checkbox'
            checked={completed}
            onChange={() => dispatch(toggleTodoCompleted({ id }))}
            checkedChildren={<CloseOutlined />}
            unCheckedChildren={<CheckOutlined />}
          />
          <span className='todo__text'>{text}</span>
          <CloseOutlined
            className='todo__close'
            onClick={() => dispatch(removeTodo({ id }))}
          />
          {/* </div> */}
          {/* <div className='todo__down-content'> */}
          <div className='todo__date-time'>
            <div>{date}</div>
            <div>{time}</div>
          </div>
          <EditOutlined
            className='todo__change'
            onClick={() => setOpenChangeModal(true)}
          />
          {/* </div> */}
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
