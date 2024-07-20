import React from 'react'
import { Button, Space, Input } from 'antd'

export default function InputField({ text, setText, addTodo }) {
  return (
    <div className='todo__label'>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type='text'
        placeholder='Todo'
      />
      <Button onClick={addTodo}>Add Todo</Button>
    </div>
  )
}
