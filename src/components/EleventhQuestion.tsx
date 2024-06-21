import React, { useState } from 'react'

const EleventhQuestion = () => {
    const [textInput,setTextInput] = useState('')
    const [modifiedText,setModidfiedText] = useState('')
    const handleChange=(e)=>{
        const str = e.target.value
        setTextInput(str)
        console.log(str);

        let result=''
        for(let i=0;i<str.length;i++){
            let char = str.charCodeAt(i)
            char += 10;
            result += String.fromCharCode(char)

        }
        console.log('the result after ascii modification: ', result);
        setModidfiedText(result)

    }
  return (
    <>
    <div>
      <h2>Ascii COnversion from char</h2>
      Text:<input type="text" onChange={handleChange} />
    </div>
    <div>
        <h2>Converted Text:</h2>
        {modifiedText.length>0 && modifiedText}
    </div>
    </>
  )
}

export default EleventhQuestion
