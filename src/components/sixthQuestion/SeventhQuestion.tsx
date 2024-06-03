import React, { useState } from 'react'

const SeventhQuestion = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <h2>Counter</h2>
        <div>
            {count}
            <button>Increment</button>
        </div>
    </div>
  )
}

export default SeventhQuestion
