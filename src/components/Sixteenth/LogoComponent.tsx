import { useState } from 'react'
import QuadrantComponent from './QuadrantComponent'

const LogoComponent = () => {
  const [clicked,setClicked] = useState(false)

  return (
    <div>
        <div style={{display:'flex'}}>
        <QuadrantComponent clicked={clicked} setClicked ={setClicked}/>
        <QuadrantComponent clicked={clicked} setClicked ={setClicked}/>
        </div>
        <div style={{display:'flex'}}>
        <QuadrantComponent clicked={clicked} setClicked ={setClicked}/>
        <QuadrantComponent clicked={clicked} setClicked ={setClicked}/>
        </div>

    </div>
  )
}

export default LogoComponent
