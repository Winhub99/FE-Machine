import React from 'react'

const ThirdComponent = ({formData,handleChange}) => {
  return (
    <div>
      <h2>Third Step</h2>
      City: <input type="text" name='city' value={formData.city} onChange={handleChange}/>
      Age: <input type="number" name='pincode' value={formData.pincode} onChange={handleChange}/>
    </div>
  )
}

export default ThirdComponent
