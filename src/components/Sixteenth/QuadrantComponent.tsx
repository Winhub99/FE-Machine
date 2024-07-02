import  { useState } from 'react'

const QuadrantComponent = () => {
   
    const [clicked,setClicked] = useState(false)
    
    const clickHandler = ()=>{

        setClicked(true)
    }
  return (
    <div style={{width:'50px',height:'50px', backgroundColor:'blue',margin:'2px'}} onClick={clickHandler}>
      {clicked && <h6>Clicked!</h6>}
    </div>
  )
}

export default QuadrantComponent
