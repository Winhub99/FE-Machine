import React, { useEffect, useState } from 'react'

const ProductsList = ({products}) => {

  return (
    <div>
      <h2>Products</h2>
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

export default ProductsList
