import { useEffect, useState } from 'react'

import './App.css'
import PersonComponent from './PersonComponent'

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
     // console.log(data);
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
  //console.log(newDS);
  
  return (
    <div>
        <h2>Todos</h2>
        <div className='flex flex-direction-row'>
        {Object.entries(newDS).map((entry)=>{
          let userId= entry[0]
          let value = entry[1]
          return <PersonComponent userId={userId} value={value}/>
        })}
        </div>
    </div>
  )
}

export default App
