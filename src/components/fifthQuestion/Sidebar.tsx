import React from 'react'

const Sidebar = ({products}) => {
    const discounts=[40,50,60,70]
  return (
    <div>
      <h2>Discount</h2>
        <div className="checkboxes">
            {discounts.map((element)=>(<label >{element}%<input type='checkbox'/></label>))}
        </div>
    </div>
  )
}

export default Sidebar
