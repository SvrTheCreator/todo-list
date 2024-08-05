import React from 'react'
import { Input } from 'antd'
import Sorting from './Sorting'

export default function Search(props) {
  return (
    <div
      style={{
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <Input
        style={{
          display: 'flex',
          justifyContent: 'start',
          // width: 200,
        }}
        onChange={({ target: { value } }) => props.search(value)}
        placeholder='Search todo'
      />
      {/* <Sorting /> */}
    </div>
  )
}
