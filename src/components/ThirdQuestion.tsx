import React, { useEffect, useState } from 'react'
import Product from './Product'

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

    const onDelete=(pId: any)=>{
        console.log('deleted reached the parent');
        console.log("The id of item to be deleted is: ",pId);
        
        const filteredProducts = products.filter(product=> product.id !=pId)
        console.log(filteredProducts);
        setProducts(filteredProducts)
        
    }
    const onCompleted=(cId: any)=>{
console.log('completed called on parent');
const tempList =[...products]
const targetProduct = tempList.find(product=>product.id===cId)
console.log(targetProduct);

targetProduct.completed=!targetProduct.completed
setProducts(tempList)
console.log(products);


    }
  return (
    <div className='content-center'>
      <h2>Products Page</h2>
      <div className='products-list'>
        {products.map((product)=>(<Product key={product.id} data={product} onDelete={onDelete} onCompleted={onCompleted}/>))}
      </div>
    </div>
  )
}

export default ThirdQuestion
