import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import ProductsList from './ProductsList'
import './fifth.css'
const MainComponent = () => {
  const [products,setProducts] = useState([])
  const [filteredProducts,setFilteredProducts] = useState([])
  useEffect(()=>{
      const fetchProducts= async()=>{
          const response = await fetch('https://dummyjson.com/products')
          const data = await response.json()
          console.log(data);
          setProducts(data.products)
          setFilteredProducts(data.products)
      }
      fetchProducts()
  },[])

  const updateFilteredProducts=(selectedDiscounts)=>{
    console.log('updating selected discountss');
    
    if(selectedDiscounts.length===0){
      setFilteredProducts(products)
    }else{
      const filtered = products.filter(product=>selectedDiscounts.some(discount=>product.discountPercentage>=discount))
      console.log(filtered);
      
      setFilteredProducts(filtered)
    }
  }
  
  return (
    <div className='container'>
   
        <div className="sidebar"><Sidebar products={products} updateFilteredProducts={updateFilteredProducts} /></div>    
        <div className="products"><ProductsList products={filteredProducts}/></div>
    </div>
  )
}

export default MainComponent
