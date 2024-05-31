import React, { useState } from 'react'

const Stopwatch = () => {
    const [seconds,setSeconds] = useState(0)
    const [minutes,setMinutes] = useState(0)
    const [hours,setHours] = useState(0)

    const startHandler=()=>{
        setInterval(()=>{
            console.log('the seconds are : ',seconds);
            
            if(seconds===60){
                if(minutes===60){
                    setHours(prev=>prev+1)
                    setMinutes(0)
                }else{
                    setMinutes(prev=> prev+1)

                }
                setSeconds(0)
            }
            setSeconds(prev=>prev+1)
        },1000)
    }
  return (

    <div>
      <h2>Stopwatch</h2>
      <div>
        <h4>{hours}::{minutes}::{seconds}</h4>
      </div>
      <div style={{display:'flex', gap:'10px'}}>
        <button>Stop</button>
        <button onClick={startHandler}>Start</button>
        <button>Clear</button>
      </div>
    </div>
  )
}

export default Stopwatch
