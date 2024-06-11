import React, { useState } from 'react'

const NinthQuestion = ({dataType}) => {

  const [inputValue,setInputValue] = useState()
  const validate=(e)=>{
    console.log('the data: ',dataType);
    
    
  }
  return (
    <div>
      <h2>Type Checker</h2>
      <input type={dataType} onChange={(e)=>validate(e)} value={inputValue} />
    </div>
  )
}

export default NinthQuestion
