import React from 'react'
import Sidebar from './Sidebar'
import ProductsList from './ProductsList'
import './fifth.css'
const MainComponent = () => {
  return (
    <div className='container'>
   
        <div className="sidebar"><Sidebar/></div>    
        <div className="products"><ProductsList/></div>
    </div>
  )
}

export default MainComponent
