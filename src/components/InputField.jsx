import React from 'react'
import { Button, Input } from 'antd'
export default function InputField({ text, setText, addTodo }) {
  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      addTodo()
    }
  }
  return (
    <div className='todo__label'>
      <Input
        onKeyDown={handleKeyPress}
        value={text}
        onChange={(e) => setText(e.target.value)}
        type='text'
        placeholder='Todo'
      />
      <Button onClick={addTodo}>Add Todo</Button>
    </div>
  )
}
