import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    filteredTodos: [],
  },
  reducers: {
    addTodo(state, action) {
      let currentDate = new Date()
      const Hour = currentDate.getHours()
      const Minutes = currentDate.getMinutes()
      const Seconds = currentDate.getSeconds()
      const day = currentDate.getDate()
      const month = currentDate.getMonth() + 1
      const year = currentDate.getFullYear()
      function twoDigits(num) {
        return ('0' + num).slice(-2)
      }

      if (action.payload.text.trim().length) {
        state.todos.unshift({
          id: Math.floor(Math.random() * 1000),
          text: action.payload.text,
          completed: false,
          order: Math.floor(Math.random() * 1000),
          time: `${
            twoDigits(Hour) +
            ':' +
            twoDigits(Minutes) +
            ':' +
            twoDigits(Seconds)
          }`,
          date: `${
            twoDigits(day) + '/' + twoDigits(month) + '/' + twoDigits(year)
          }`,
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
  },
})

export const { addTodo, removeTodo, toggleTodoCompleted, changeText } =
  todoSlice.actions

export default todoSlice.reducer
