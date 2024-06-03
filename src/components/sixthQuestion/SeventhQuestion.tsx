import React, { useState } from 'react'

const SeventhQuestion = () => {
    const [count,setCount] = useState(0)
    const [prevoius,setPrevious] = useState(0)
    const incrementCounterHandler=()=>{
         setPrevious(count)        
        setCount(prev=>prev+1)
    }
  return (
    <div>
        <h2>Counter</h2>
        <div>
            <span><b>Current:</b></span>{count}
            <span><b>Prev:</b></span>{prevoius}
            <button onClick={incrementCounterHandler}>Increment</button>
        </div>
    </div>
  )
}

export default SeventhQuestion
