import React, { useState } from 'react'

const Eight = () => {
    const [items,setItems] = useState([])
    const [element,setElement] = useState()

    const addElementToItems=()=>{
        console.log("adding elemet to array");
        items.push(element)
       
        console.log(items)
        
    }
  return (
    <>
    <div>
      <input type="text" onChange = {(e)=>{setElement(parseInt(e.target.value))}}/>
      <button onClick={addElementToItems}>Add</button>
    </div>
    <div style={{display:'flex',flexDirection:'row',gap:'10px'}}>
        {items.map(item=><span key={item}>{item}</span>)}
        {items.sort((a,b)=>(a-b))}
        
    </div>
    <h2>The Second largest element is: </h2>
    <h3>{items[1]}</h3>

    </>
  )
}

export default Eight
