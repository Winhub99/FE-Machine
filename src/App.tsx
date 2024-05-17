import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    const fetchTodos = async()=>{
      const res = await fetch('https://dummyjson.com/todos?limit=10&skip=80')
      const data = await res.json()
      console.log(data);
      
    }
    fetchTodos()
  },[])

  return (
    <div>
        <h2>Todos</h2>
    </div>
  )
}

export default App
