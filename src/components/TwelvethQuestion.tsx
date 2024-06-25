import { useState } from 'react'

const TwelvethQuestion = () => {

    const [formData, setFormData] = useState({
        firstname:'',
        age:0,
        email:'default@gmail.com',
        password:''
    })

    const setFormDataHandler=(e: { target: { name: any; value: any } })=>{
        const {name,value} = e.target
        console.log(`the name of changing var is: ${name} and the value is ${value}` );
        setFormData((prev)=>({...prev,[name]:value}))
        console.log(formData);
        
        
    }
    const checkValidations=()=>{
        console.log('checking validations');
        
        if(formData.firstname.length===0 || formData.firstname.length>100 ){
            console.log(formData.firstname.length);
            
            alert('Name should be greter than 1 and less than 100')
        }
        if(formData.age<18 || formData.age>99 ){
            alert('enter valid age')
        }
        if(!formData.email.includes('.com')){
            alert('Enter valid email')
        }
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
        <button type='submit' onClick={checkValidations}>Submit</button>
      </form>
    </div>
  )
}

export default TwelvethQuestion
