import React from 'react'

const NinthQuestion = ({type}) => {


  const validate=(e)=>{
    console.log('the data type of input is : ',type);
    
  }
  return (
    <div>
      <h2>Type Checker</h2>
      <input type={type} onChange={(e)=>validate(e)} />
    </div>
  )
}

export default NinthQuestion
