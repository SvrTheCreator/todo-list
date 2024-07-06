import { useState } from 'react'
import TodoList from './components/TodoList'
import InputField from './components/InputField'
import { useDispatch } from 'react-redux'
import { addTodo } from './store/todoSlice'

function App() {
  const [text, setText] = useState('')
  const [newValue, setNewValue] = useState('')
  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({ text }))
    setText('')
  }

  return (
    <div className='container'>
      <div className='app'>
        <h1>Todo list</h1>
        <InputField text={text} setText={setText} addTodo={addTask} />
        <TodoList />
      </div>
    </div>
  )
}

export default App
