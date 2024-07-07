import { useState } from 'react'
import QuadrantComponent from './QuadrantComponent'

const LogoComponent = () => {

  const [active,setActive] = useState(null)

  const clickHandler = (id)=>{
    setActive(id)
  }
  return (
    <div>
        <div style={{display:'flex'}}>
        <QuadrantComponent id={1} isActive={active===1} onClick={clickHandler}/>
        <QuadrantComponent id={2} isActive={active===2} onClick={clickHandler}/>
        </div>
        <div style={{display:'flex'}}>
        <QuadrantComponent id={3} isActive={active===3} onClick={clickHandler}/>
        <QuadrantComponent id={4} isActive={active===4} onClick={clickHandler}/>
        </div>

    </div>
  )
}

export default LogoComponent
