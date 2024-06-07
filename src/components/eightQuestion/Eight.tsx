import React, { useState } from 'react'

const Eight = () => {
    const [items,setItems] = useState([])
    const [element,setElement] = useState()

    const addElementToItems=()=>{
        console.log("adding elemet to array");
        
        items.push(element)
        console.log(items);
        
    }
  return (
    <>
    <div>
      <input type="text" onChange = {(e)=>{setElement(parseInt(e.target.value))}}/>
      <button onClick={addElementToItems}>Add</button>
    </div>
    <span>
        {console.log(items) }
    </span>
    
    </>
  )
}

export default Eight
