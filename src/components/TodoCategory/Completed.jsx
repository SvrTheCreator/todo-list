import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../TodoItem'
import NowEmpty from './NowEmpty'

export default function Completed() {
  const todos = useSelector((state) => state.todos.todos)

  const todosCompleted = todos
    .filter((el) => el.completed === true)
    .map((todo) => <TodoItem key={todo.id} {...todo} />)

  return <ul>{todosCompleted.length == 0 ? <NowEmpty /> : todosCompleted}</ul>
}
