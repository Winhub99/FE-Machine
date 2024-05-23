import React, { useEffect, useState } from 'react'

const FifthQuestion = () => {
    const [products,setProducts] = useState([])
    const [page , setPage] = useState(1)
    const [totalPages,setTotalPages] = useState(0)

    useEffect(()=>{
        const fetchProducts= async()=>{
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`)
            const data = await response.json()
            console.log(data);
            setProducts(data.products)
            setTotalPages(data.total/10)
            console.log('total pages are:',totalPages);
            
        }
        fetchProducts()
    },[page])
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
          <div style={{display:'flex',flexDirection:'row',gap:'10px',justifyContent:'center'}}>
          {totalPages> 0 && [...Array(totalPages)].map((_,i)=>{
            return <span key={i}
                    style={{backgroundColor:'grey',width:'35px', height:'35px' ,textAlign:'center', border:'1px solid grey', borderRadius:'50%', cursor:'pointer', color:'white'}}
                    onClick={()=>setPage(i=>i+1)}>{i+1}</span>
            }
            )}
            </div>

    </div>
  )
}

export default FifthQuestion
