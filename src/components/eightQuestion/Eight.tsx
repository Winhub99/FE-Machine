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
    <div style={{display:'flex',flexDirection:'row',gap:'10px'}}>
        {items.map(item=><span key={item}>{item}</span>)}
    </div>

    </>
  )
}

export default Eight
