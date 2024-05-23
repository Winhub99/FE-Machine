import React, { useEffect, useState } from 'react'

const FifthQuestion = () => {
    const [products,setProducts] = useState([])
    const [page , setPage] = useState(3)

    useEffect(()=>{
        const fetchProducts= async()=>{
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`)
            const data = await response.json()
            console.log(data);
            setProducts(data.products)
        }
        fetchProducts()
    },[])
  return (
    <div>
      Pagination
      {products.length > 0 && <div className="products">
          {products.map((product)=>{
            return (<span className="products__single" key={product.id}>
              <img src={product.thumbnail} alt={product.title}/>
              <span className="title">{product.title}</span>
      
              </span>)
          })}
          </div>}
    </div>
  )
}

export default FifthQuestion
