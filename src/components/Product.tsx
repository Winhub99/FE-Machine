import React from 'react'

const Product = ({data,onDelete}) => {
    const deleteProduct=(id)=>{
        console.log('dekete ckicked');
        
        onDelete(id)
    }
  return (
    <div>
      <h2>{data.title}</h2>
      {/* <img src={data.thumbnail} alt="" /> */}
      <span><button onClick={()=>deleteProduct(data.id)}>X</button></span>
      <input type="checkbox" value={data.completed}  />

    </div>
  )
}

export default Product
