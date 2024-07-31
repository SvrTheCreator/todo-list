import React, { useState, useEffect } from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
import Search from './Search'

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
      //делаем копию нашего стейта
      currentTodos = todos
      //фильтруем стейт в поисках совпадений
      newList = currentTodos.filter((todo) => {
        // значение которое пользователь ввел и которое у нас
        // в стейте делаем строчными буквами чтобы конфликтов не было
        // мало ли пользователь ввель строчными буквами а у нас заглавные
        const lc = todo.text.toLowerCase()
        const filter = value.toLowerCase()
        // проверяем есть ли у нас этот элемент если есть возвращаем этот элемент
        return lc.includes(filter)
      })
    } else {
      // если в input ничего нету то есть пользователь стерь то
      // что ввел тогда возвращаем все задачи
      newList = todos
    }
    setFiltered(newList)
  }

  function AllItems(params) {
    if (currentCategory === 'completed' || currentCategory === 'active') {
      return (
        <ul>
          {filtered
            .filter((el) => el.completed === params)
            .map((todo) => (
              <TodoItem key={todo.id} {...todo} />
            ))}
          {/* {console.log(params)} */}
        </ul>
      )
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
      <Search {...{ search }} />
      {category()}
    </>
  )
}
