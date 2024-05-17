import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  type todoType={
    completed:boolean,
    id: number,
    todo:string,
    userId:number
  }

  type newDS ={
    userId:number,
    todos:string[]
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

  const newDS= todos.reduce((accumulator,curr:todoType)=>{
      const {userId,todo} = curr;
      if(!accumulator[userId]){
        accumulator[userId]=[];
      }
      accumulator[userId].push(todo)
      
    return accumulator;
  },{})
  console.log(newDS);
  
  return (
    <div>
        <h2>Todos</h2>
        {todos.map((myTodo:todoType)=>(
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
