import { useState } from 'react'
import { Typography, Card } from 'antd'
import TodoList from './components/TodoList'
import InputField from './components/InputField'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './store/todoSlice'
import Categories from './components/Categories'
import NotFoundPage from './components/NotFoundPage'
import { Routes, Route } from 'react-router-dom'

const { Title } = Typography

function App() {
  const [text, setText] = useState('')
  const [currentCategory, setCurrentCategory] = useState('all')
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos.todos)

  const onClickCategory = (e) => {
    // console.log('click ', e)
    setCurrentCategory(e.key)
  }

  const addTask = () => {
    dispatch(addTodo({ text }))
    setText('')
  }

  return (
    <Card className='app' bordered={false}>
      <Title level={1} style={{ color: '#1677ff' }}>
        Todo list
      </Title>
      <InputField text={text} setText={setText} addTodo={addTask} />
      {todos.length > 0 && (
        <Categories
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          onClickCategory={onClickCategory}
        />
      )}
      <Routes>
        <Route
          path='/'
          element={<TodoList currentCategory={currentCategory} />}
        />
        <Route
          path='/active'
          element={<TodoList currentCategory={currentCategory} />}
        />
        <Route
          path='/completed'
          element={<TodoList currentCategory={currentCategory} />}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Card>
  )
}
// <div className='app'>
//   <Title level={1}>Todo list</Title>
//   {/* <h1>Todo list</h1> */}
//   <InputField text={text} setText={setText} addTodo={addTask} />
//   <TodoList />
// </div>

export default App
