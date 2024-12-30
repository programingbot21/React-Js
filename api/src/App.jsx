import { useState } from 'react'
import { Todoprovide } from './context'
 import './App.css'
import { useEffect } from 'react'
import TodoForm from './component/TodoForm'
import TodoItem from './component/TodoItem'
function App() {
  const [todo, setTodo] = useState([])
  
  const addTodo = (todo) =>  {
    setTodo((prev) => [{id: Date.now(), ...todo}, ...prev])
  }
 
  const updatedTodo = (id, todo) => {
    setTodo((prev) => prev.map((prevTodo) => {
      prevTodo.id === id ? todo : prevTodo
    }))
  }

  const deleteTodo =  (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id != id))
  }


  const toggleComplete = (id) => {
    setTodo((prev) => prev.map((prevTodo) => prevTodo ===
    id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
   const todo = JSON.parse(localStorage.getItem('todo'))

   if(todo && todo.length > 0){
    setTodo(todo)
   }

  }, [])

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo))
  }, [todo])
  

  return (
    <Todoprovide value={{addTodo ,updatedTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todo.map((todo) => {
                          <div key={todo.id}>
                            <TodoItem/>
                          </div>
                        })}
                    </div>
                </div>
            </div>
    </Todoprovide>
  )
}

export default App
