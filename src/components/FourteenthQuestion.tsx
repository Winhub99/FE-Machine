import React from 'react'

const FourteenthQuestion = () => {
  return (
    <div>
      <h2>Fifteenth Question</h2>
      <form action="">
        <label htmlFor="all">All</label>
        <input type="checkbox" id='all' /><br/>

        <label htmlFor="physics">Physics</label>
        <input type="checkbox" id='physics' />
        <label htmlFor="chemistry">Chemistry</label>
        <input type="checkbox" id='chemistry' />
        <label htmlFor="maths">Mathematics</label>
        <input type="checkbox" id='maths' />
        <label htmlFor="biology">All</label>
        <input type="checkbox" id='biology' />
        <label htmlFor="comp">Computer Science</label>
        <input type="checkbox" id='comp' /><br/>
        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default FourteenthQuestion
