import React, { useEffect, useState } from 'react'

const ThirdQuestion = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const fetchProducts= async()=>{
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json()
            console.log(products);
            setProducts(data.products)
            console.log(products);            
        }
        fetchProducts()
    },[])

  return (
    <div className='content-center'>
      <h2>Products Page</h2>
    </div>
  )
}

export default ThirdQuestion
