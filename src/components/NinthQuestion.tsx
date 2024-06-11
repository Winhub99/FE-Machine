import React, { useState } from 'react'

const NinthQuestion = ({dataType}) => {

  const [inputValue,setInputValue] = useState(""||0)
  const [error,setError] = useState("")
  const validate=(e)=>{
    console.log('the data: ',dataType);
    setInputValue(e.target.value)

    if(dataType==="number"){
      if(inputValue > 999 || inputValue < 0 ){
        
        setError("Number should be in range of 0 to 999")

      }
    }else{
      if(dataType==="text"){
        if(inputValue.length> 15){
          console.log("char length error occured");

          setError('Max 15 characters allowed')
        }
      }
    }
    
    
  }
  return (
    <div>
    {error ? (<div> {error}</div>): (<div>
      <h2>Type Checker</h2>
      <input type={dataType} onChange={(e)=>validate(e)} value={inputValue} />
    </div>)
    }
    </div>
  )
}
export default NinthQuestion
