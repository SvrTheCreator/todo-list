import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      const now = moment()
      const currentDate = now.format('DD/MM/YY, HH:mm:ss')
      if (action.payload.text.trim().length) {
        state.todos.unshift({
          id: Math.floor(Math.random() * 1000),
          text: action.payload.text,
          completed: false,
          date: currentDate,
        })
      }
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
    },
    toggleTodoCompleted(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      )
      toggledTodo.completed = !toggledTodo.completed
    },
    changeText(state, action) {
      const changeTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      )
      changeTodo.text = action.payload.newValue
    },
    sortTodos(state, action) {
      if (action.payload.key === 'text-upper') {
        state.todos.sort((a, b) => {
          if (a.text.toLowerCase() < b.text.toLowerCase()) {
            return -1
          }
          if (a.text.toLowerCase() > b.text.toLowerCase()) {
            return 1
          }
          return 0
        })
      }
      if (action.payload.key === 'text-down') {
        state.todos.sort((a, b) => {
          if (a.text.toLowerCase() > b.text.toLowerCase()) {
            return -1
          }
          if (a.text.toLowerCase() < b.text.toLowerCase()) {
            return 1
          }
          return 0
        })
      }
      if (action.payload.key === 'date-upper') {
        state.todos.sort(
          (a, b) =>
            moment(b.date, 'DD/MM/YY, HH:mm:ss') -
            moment(a.date, 'DD/MM/YY, HH:mm:ss')
        )
      }
      if (action.payload.key === 'date-down') {
        state.todos.sort(
          (a, b) =>
            moment(a.date, 'DD/MM/YY, HH:mm:ss') -
            moment(b.date, 'DD/MM/YY, HH:mm:ss')
        )
      }
    },
  },
})

export const {
  addTodo,
  removeTodo,
  toggleTodoCompleted,
  changeText,
  sortTodos,
} = todoSlice.actions

export default todoSlice.reducer
