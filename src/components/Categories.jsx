import { useState } from 'react'
import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

const category = [
  {
    label: <Link to='/'>All</Link>,
    key: 'all',
  },
  {
    label: <Link to='/completed'>Completed</Link>,
    key: 'completed',
  },
  {
    label: <Link to='/active'>Active</Link>,
    key: 'active',
  },
]

export default function Categories() {
  const [currentCategory, setCurrentCategory] = useState('all')

  const onClick = (e) => {
    // console.log('click ', e)
    setCurrentCategory(e.key)
  }

  return (
    <Menu
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={onClick}
      selectedKeys={[currentCategory]}
      mode='horizontal'
      items={category}
    />
  )
}
