import React, { useEffect, useState } from 'react'

const Sidebar = ({ products , updateFilteredProducts}) => {
  const [filteredProducts, setFilteredProducts] =useState([])
   const discounts = [5,10,15,20]
   const [selectedDiscounts,setSelectedDiscounts] = useState([])
  // let allDiscounts=[]
  if (products.length) {
    const allDiscounts = products.reduce((acc, element) => {
      acc.push(element.discountPercentage)
      return acc
    }, [])
   // console.log(allDiscounts);
  }
  const handleCheckboxChange=(discount)=>{
    const newSelectedDiscounts=selectedDiscounts.includes(discount)?selectedDiscounts.filter(disc=> disc!= discount):[...selectedDiscounts,discount]    
    setSelectedDiscounts(newSelectedDiscounts)
    updateFilteredProducts(newSelectedDiscounts)
  }
  return (
    <div>
      <h2>Discount</h2>
      <div className="checkboxes">
        {discounts.map((element) => (<label key={element} >{element}%<input type='checkbox' value={element} onChange={()=>handleCheckboxChange(element)} /></label>))}
        {/* {console.log(filteredProducts)} */}
      </div>
    </div>
  )
}

export default Sidebar
