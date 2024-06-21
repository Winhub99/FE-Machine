import React, { useState } from 'react'

const EleventhQuestion = () => {
    const [textInput,setTextInput] = useState('')

    const handleChange=(e)=>{
        const str = e.target.value
        setTextInput(str)
        console.log(str);
        
    }
  return (
    <>
    <div>
      <h2>Ascii COnversion from char</h2>
      Text:<input type="text" onChange={handleChange} />
    </div>
    <div>

       
    </div>
    </>
  )
}

export default EleventhQuestion
