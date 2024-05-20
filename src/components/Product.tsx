import React from 'react'

const Product = ({data,onDelete,onCompleted}) => {
    const deleteProduct=(id)=>{
        console.log('dekete ckicked');
        
        onDelete(id)
    }

    const handleCompletedChange= (id)=>{
        console.log('checkbox clicked');
        
        onCompleted(id)
    }
  return (
    <div>
       <h2 style={{textDecoration:data.completed ? 'line-through':'none'}}>{data.title}</h2>
      {/* <img src={data.thumbnail} alt="" /> */}
      <span><button onClick={()=>deleteProduct(data.id)}>X</button></span>
      <input type="checkbox" value={data.completed} onChange={()=>handleCompletedChange(data.id)}  />

    </div>
  )
}

export default Product
