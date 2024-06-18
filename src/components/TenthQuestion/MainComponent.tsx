import React, { useState } from 'react'

const MainComponent = () => {
  const [currentStep,setCurrentStep] = useState(1)
  const [formData,setFormData] = useState({
    firstname:'',
    lastname:'',
    education:'',
    age:'',
    city:'',
    pincode:0
  })

  return (
    <div>
      Main comonent
    </div>
  )
}

export default MainComponent
