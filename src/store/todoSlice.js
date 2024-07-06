import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
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
      if (action.payload.text.trim().length) {
        state.todos.unshift({
          id: Math.random(),
          text: action.payload.text,
          completed: false,
          // сделать дату
          time: `${Hour + ':' + Minutes + ':' + Seconds}`,
          date: `${day + '/' + month + '/' + year}`,
        })
      }
      if (action.payload.text.trim().length <= 0) {
        alert('Не должно быть пустой строки')
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

      // console.log(action.payload.id)
    },
  },
})

export const { addTodo, removeTodo, toggleTodoCompleted, changeText } =
  todoSlice.actions

export default todoSlice.reducer
