import React, { useState } from 'react'
import FirstStep from './FirstStep'

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

  const handleChange=(e)=>{
    const {name,value} = e.target;
    setFormData(prev=>({...prev,[name]:value}))
  }

  return (
    <div>
      Multi Step Form 
     <FirstStep formData={formData} />
    </div>
  )
}

export default MainComponent
