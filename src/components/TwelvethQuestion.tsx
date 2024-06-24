import React, { useState } from 'react'

const TwelvethQuestion = () => {

    const [formData, setFormData] = useState({
        firstname:'',
        age:0,
        email:'default@gmail.com',
        password:''
    })

    const setFormDataHandler=(e)=>{
        const {name,value} = e.target
        console.log(`the name of changing var is: ${name} and the value is ${value}` );
        
    }
  return (
    <div>
      <h2>Twelveth</h2>
      <form action="">
        <label htmlFor="Name">
        Firstname:
        </label>
        <input type="text" name='Name' onChange={setFormDataHandler} /><br/>
        <label htmlFor="age">
        Age:
        </label>
        <input type="text" name='age' onChange={setFormDataHandler}/><br/>
        <label htmlFor="email">
        Email:
        </label>
        <input type="text" name='email' onChange={setFormDataHandler}/><br/>
        <label htmlFor="password">
        Password:
        </label>
        <input type="text" name='password' onChange={setFormDataHandler}/><br/>
        <label htmlFor="re-password">
        Re-enter Password:
        </label>
        <input type="text" name='re-password' onChange={setFormDataHandler}/><br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default TwelvethQuestion
