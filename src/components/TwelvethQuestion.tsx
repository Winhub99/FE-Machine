import React from 'react'

const TwelvethQuestion = () => {
  return (
    <div>
      <h2>Twelveth</h2>
      <form action="">
        <label htmlFor="Name">
        Firstname:
        </label>
        <input type="text" name='Name' /><br/>
        <label htmlFor="age">
        Age:
        </label>
        <input type="text" name='age' /><br/>
        <label htmlFor="email">
        Email:
        </label>
        <input type="text" name='email' /><br/>
        <label htmlFor="password">
        Password:
        </label>
        <input type="text" name='password' /><br/>
        <label htmlFor="re-password">
        Re-enter Password:
        </label>
        <input type="text" name='re-password' /><br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default TwelvethQuestion
