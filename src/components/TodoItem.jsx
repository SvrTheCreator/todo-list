import React, { useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodoCompleted, changeText } from '../store/todoSlice'
import ModalWindow from './Modal'
import { Card, Switch, notification, Button, Tooltip } from 'antd'
import { CloseOutlined, EditOutlined, CheckOutlined } from '@ant-design/icons'

const Context = React.createContext({
  name: 'Default',
})

export default function TodoItem({ id, text, completed, time, date }) {
  const dispatch = useDispatch()
  const [newValue, setNewValue] = useState('')
  const [openChangeModal, setOpenChangeModal] = useState(false)

  const [api, contextHolder] = notification.useNotification()
  const openNotification = (placement) => {
    api.info({
      message: `The task has been changed `,
      placement,
    })
  }
  const contextValue = useMemo(
    () => ({
      name: 'Ant Design',
    }),
    []
  )

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      changeNewTodo()
    }
  }

  const changeNewTodo = () => {
    if (newValue.trim().length) {
      dispatch(changeText({ id, newValue }))
      setNewValue('')
      setOpenChangeModal(false)
      openNotification('top')
    }
    if (newValue.trim().length <= 0) {
      setOpenChangeModal(true)
      setNewValue('')
      openNotification('top')
    }
  }

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <li className='todo'>
        <Card className='todo__content'>
          <Switch
            className='todo__checked-input'
            type='checkbox'
            checked={completed}
            onChange={() => dispatch(toggleTodoCompleted({ id }))}
            checkedChildren={<CloseOutlined />}
            unCheckedChildren={<CheckOutlined />}
          />
          <div className='todo__text'>{text}</div>

          <Tooltip title='Delete todo'>
            <Button
              className='todo__close'
              onClick={() => dispatch(removeTodo({ id }))}
              shape='circle'
              icon={<CloseOutlined />}
            />
          </Tooltip>
          <div className='todo__date'>
            <div>{date}</div>
          </div>
          <Tooltip title='Change todo'>
            <Button
              className='todo__change'
              onClick={() => setOpenChangeModal(true)}
              shape='circle'
              icon={<EditOutlined />}
            />
          </Tooltip>
        </Card>
      </li>
      <ModalWindow
        newValue={newValue}
        setNewValue={setNewValue}
        changeNewTodo={changeNewTodo}
        isOpen={openChangeModal}
        onClose={() => setOpenChangeModal(false)}
        handleKeyPress={handleKeyPress}
      />
    </Context.Provider>
  )
}
