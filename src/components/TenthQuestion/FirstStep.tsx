import React from 'react'

const FirstStep = ({formData,handleChange}) => {
  return (
    <div>
      <h2>Step 1</h2>
       Firstname: <input type="text" name='firstname' value={formData.firstname} onChange={handleChange} /><br/>
       Lastname: <input type="text" name='lastname' value={formData.lastname} onChange={handleChange}/>
    </div>
  )
}

export default FirstStep
