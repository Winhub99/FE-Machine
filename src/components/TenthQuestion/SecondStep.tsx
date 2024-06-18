import React from 'react'

const SecondStep = ({handleChange,formData}) => {
  return (
    <div>
      <h2>Second step</h2>
      Education: <input type="text" name='education' value={formData.education} onChange={handleChange}/>
      Age: <input type="number"  name='age' value={formData.age} onChange={handleChange}/>
    </div>
  )
}

export default SecondStep
