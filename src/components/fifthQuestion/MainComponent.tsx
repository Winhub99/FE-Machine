import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import ProductsList from './ProductsList'
import './fifth.css'
const MainComponent = () => {
  const [products,setProducts] = useState([])
  useEffect(()=>{
      const fetchProducts= async()=>{
          const response = await fetch('https://dummyjson.com/products')
          const data = await response.json()
          console.log(data);
          setProducts(data.products)
      }
      fetchProducts()
  },[])
  return (
    <div className='container'>
   
        <div className="sidebar"><Sidebar products={products}/></div>    
        <div className="products"><ProductsList products={products}/></div>
    </div>
  )
}

export default MainComponent
