import { useState } from 'react'
import {
  Typography,
  Card,
  FloatButton,
  Space,
  ConfigProvider,
  Button,
  Modal,
} from 'antd'
import { MoonOutlined, SunOutlined } from '@ant-design/icons'
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
  const [currentTheme, setCurrentTheme] = useState('light')
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos.todos)

  const onClickCategory = (e) => {
    setCurrentCategory(e.key)
  }

  const addTask = () => {
    dispatch(addTodo({ text }))
    setText('')
  }

  const lightTheme = {
    colorBgContainer: 'white',
    colorTextBase: 'black',
  }
  const darkTheme = {
    colorBgContainer: '#252526',
    colorTextBase: 'white',
  }
  const changeTheme = (theme) => {
    document.body.classList.toggle('dark')
    setCurrentTheme(theme)
  }

  return (
    <ConfigProvider
      theme={{
        token: currentTheme === 'light' ? lightTheme : darkTheme,
      }}
    >
      <Card className='app' bordered={false}>
        <Title level={1} style={{ color: '#1677ff' }}>
          Todo list
        </Title>
        <InputField
          currentTheme={currentTheme}
          text={text}
          setText={setText}
          addTodo={addTask}
        />
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
            element={
              <TodoList
                currentTheme={currentTheme}
                currentCategory={currentCategory}
              />
            }
          />
          <Route
            path='/active'
            element={
              <TodoList
                currentTheme={currentTheme}
                currentCategory={currentCategory}
              />
            }
          />
          <Route
            path='/completed'
            element={
              <TodoList
                currentTheme={currentTheme}
                currentCategory={currentCategory}
              />
            }
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <ConfigProvider
          theme={{
            token: {
              colorTextBase: 'black',
            },
          }}
        >
          <FloatButton.Group
            shape='circle'
            style={{
              insetInlineEnd: 24,
            }}
          >
            <FloatButton
              tooltip={currentTheme === 'light' ? 'dark theme' : 'light theme'}
              onClick={() =>
                currentTheme === 'light'
                  ? changeTheme('dark')
                  : changeTheme('light')
              }
              icon={
                currentTheme === 'light' ? <MoonOutlined /> : <SunOutlined />
              }
            />
            <FloatButton.BackTop tooltip={'Back top'} visibilityHeight={0} />
          </FloatButton.Group>
        </ConfigProvider>
      </Card>
    </ConfigProvider>
  )
}

export default App
