import React from 'react'

const FirstStep = ({formData}) => {
  return (
    <div>
      <h2>Step 1</h2>
       Firstname: <input type="text" name='firstname' value={formData.firstname} /><br/>
       Lastname: <input type="text" name='lastname' value={formData.lastname} />
    </div>
  )
}

export default FirstStep
