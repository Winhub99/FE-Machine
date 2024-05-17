import React from 'react'

const PersonComponent = (props) => {
const {userId,value} = props;
console.log('loading userId: ',userId);


console.log(userId ,'and the notes are ');
console.log(value);


  return (
    <div >
      <h2>{props.userId}</h2>
      <div>
        {value.map(para=>(<p>{para}</p>))}
      </div>
     <p></p> 
    </div>
  )
}

export default PersonComponent
