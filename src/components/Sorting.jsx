import React from 'react'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, message, Space } from 'antd'
import { useSelector } from 'react-redux'

export default function Sorting() {
  const todos = useSelector((state) => state.todos.todos)

  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`)
    console.log(todos)
  }
  const items = [
    {
      label: '1nd menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ]

  return (
    <Dropdown
      menu={{
        items,
        onClick,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Sorting
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  )
}
