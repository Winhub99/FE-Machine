import  { useEffect, useState } from 'react'

const QuadrantComponent = ({id,isActive,onClick}) => {
  
  return (
    <div style={{width:'50px',height:'50px', backgroundColor:'blue',margin:'2px'}} onClick={()=>onClick(id)}>
      {isActive && <h6>Clicked!</h6>}
    </div>
  )
}

export default QuadrantComponent
