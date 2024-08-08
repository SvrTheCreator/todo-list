import React, { useState, useEffect } from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
import Search from './Search'
import NowEmpty from './NowEmpty'

export default function TodoList({ currentCategory }) {
  const todos = useSelector((state) => state.todos.todos)
  const [filtered, setFiltered] = useState([])

  useEffect(
    (_) => {
      setFiltered(todos)
    },
    [todos]
  )

  const search = (value) => {
    let currentTodos = []
    let newList = []
    if (value !== '') {
      currentTodos = todos
      newList = currentTodos.filter((todo) => {
        const lc = todo.text.toLowerCase()
        const filter = value.toLowerCase()
        return lc.includes(filter)
      })
    } else {
      newList = todos
    }
    setFiltered(newList)
  }

  function AllItems(params) {
    const status = filtered
      .filter((el) => el.completed === params)
      .map((todo) => <TodoItem key={todo.id} {...todo} />)
    if (currentCategory === 'completed' || currentCategory === 'active') {
      return <ul>{status.length > 0 ? status : <NowEmpty />}</ul>
    } else {
      return (
        <ul>
          {filtered.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      )
    }
  }

  const category = () => {
    if (currentCategory === 'all') {
      return AllItems()
    }
    if (currentCategory === 'completed') {
      return AllItems(true)
    }
    if (currentCategory === 'active') {
      return AllItems(false)
    }
  }

  return (
    <>
      {todos.length > 0 && <Search {...{ search }} />}
      {category()}
    </>
  )
}
