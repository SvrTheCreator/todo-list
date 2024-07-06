import React from 'react'

export default function InputField({ text, setText, addTodo }) {
  return (
    <label>
      <input
        className='input'
        value={text}
        onChange={(e) => setText(e.target.value)}
        type='text'
      />
      <button className='add-todo' onClick={addTodo}>
        Add Todo
      </button>
    </label>
  )
}
