import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../TodoItem'
import NowEmpty from './NowEmpty'

export default function Active() {
  const todos = useSelector((state) => state.todos.todos)

  const todosActive = todos
    .filter((el) => el.completed === false)
    .map((todo) => <TodoItem key={todo.id} {...todo} />)

  return <ul>{todosActive.length == 0 ? <NowEmpty /> : todosActive}</ul>
}
