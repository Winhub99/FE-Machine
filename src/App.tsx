import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  type todo={
    completed:boolean,
    id: number,
    todo:string,
    userId:number
  }

  useEffect(()=>{
    const fetchTodos = async()=>{
      const res = await fetch('https://dummyjson.com/todos?limit=10&skip=80')
      const data = await res.json()
      console.log(data);
      setTodos(data.todos)
      
    }
    fetchTodos()
  },[])

  return (
    <div>
        <h2>Todos</h2>
        {todos.map((myTodo:todo)=>(
          <div key={myTodo.id}>
            <h1>{myTodo?.userId}</h1>
            <h4>
              {myTodo.todo}
            </h4>

          </div>
        ))}
    </div>
  )
}

export default App
