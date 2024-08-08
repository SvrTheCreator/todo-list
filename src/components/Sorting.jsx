import React from 'react'
import {
  DownOutlined,
  SortDescendingOutlined,
  SortAscendingOutlined,
  UpOutlined,
} from '@ant-design/icons'
import { ConfigProvider, Dropdown, Space } from 'antd'
import { useDispatch } from 'react-redux'
import { sortTodos } from '../store/todoSlice'

const styleForSort = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5px',
}

export default function Sorting() {
  const dispatch = useDispatch()

  const onClick = ({ key }) => {
    dispatch(sortTodos({ key }))
  }
  const items = [
    {
      label: <SortDescendingOutlined />,
      key: 'text-upper',
    },
    {
      label: <SortAscendingOutlined />,
      key: 'text-down',
    },
    {
      label: (
        <div style={styleForSort}>
          date
          <UpOutlined />
        </div>
      ),
      key: 'date-upper',
    },
    {
      label: (
        <div style={styleForSort}>
          date
          <DownOutlined />
        </div>
      ),
      key: 'date-down',
    },
  ]

  return (
    <ConfigProvider theme={{ token: { colorTextBase: 'black' } }}>
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
    </ConfigProvider>
  )
}
