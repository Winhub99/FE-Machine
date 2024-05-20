import React, { useEffect, useState } from 'react'

const ThirdQuestion = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const fetchProducts= async()=>{
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json()
            const productsWithCompletedField = data.products.reduce((acc,curr)=>{

                curr.completed=false
                 acc.push(curr)
                // return acc
                return acc
            },[])
            console.log(productsWithCompletedField);
            
            setProducts(productsWithCompletedField)
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
