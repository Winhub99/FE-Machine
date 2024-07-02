import React from 'react'
import QuadrantComponent from './QuadrantComponent'

const LogoComponent = () => {
  return (
    <div>
        <div style={{display:'flex'}}>
        <QuadrantComponent/>
        <QuadrantComponent/>
        </div>
        <div style={{display:'flex'}}>
        <QuadrantComponent/>
        <QuadrantComponent/>
        </div>

    </div>
  )
}

export default LogoComponent
