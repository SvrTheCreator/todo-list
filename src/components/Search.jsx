import React from 'react'
import { Input } from 'antd'

export default function Search(props) {
  return (
    <Input
      style={{
        display: 'flex',
        justifyContent: 'start',
        marginTop: '20px',
        width: 200,
      }}
      onChange={({ target: { value } }) => props.search(value)}
      placeholder='Search todo'
    />
  )
}
