import React, { useState } from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdComponent from './ThirdComponent'

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

  const nextHandler = ()=>{
    setCurrentStep(prev=>prev+1)
  }

  const previousHandler = ()=>{
    setCurrentStep(prev => prev-1)
  }
  return (
    <>
    <div>
      Multi Step Form 
     {currentStep=== 1 && <FirstStep formData={formData} handleChange={handleChange}/>} 
     {currentStep=== 2 && <SecondStep formData={formData} handleChange={handleChange}/>}
     {currentStep=== 3 && <ThirdComponent formData={formData} handleChange={handleChange}/>}

    </div>
    <div>
      {currentStep > 1 && <button onClick={previousHandler}>Prev</button>}
      {currentStep < 3 && <button onClick={nextHandler}>Next</button> }
    </div>
    </>
  )
}

export default MainComponent
