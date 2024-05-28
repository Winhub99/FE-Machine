import React, { useEffect } from 'react'

const Sidebar = ({ products }) => {
  console.log('printing products');
  console.log(products);


  const discounts = [40, 50, 60, 70]
  // let allDiscounts=[]
  if (products.length) {
    const allDiscounts = products.reduce((acc, element) => {
      acc.push(element.discountPercentage)
      return acc
    }, [])
    console.log(allDiscounts);
  }
  return (
    <div>
      <h2>Discount</h2>
      <div className="checkboxes">
        {discounts.map((element) => (<label >{element}%<input type='checkbox' /></label>))}
        {/* {console.log(allDiscounts)} */}
      </div>
    </div>
  )
}

export default Sidebar
