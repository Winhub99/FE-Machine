import  { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [seconds,setSeconds] = useState(0)
    const [minutes,setMinutes] = useState(59)
    const [hours,setHours] = useState(0)
    const [startWatch,setStartwatch] = useState(false)

    const startHandler=()=>{
  //    console.log("The start watch value is:",startWatch);
      
      setStartwatch(true)
  }
  const stoptimerHandler=()=>{
    setStartwatch(false)
  }
  const resetClockHandler=()=>{
    setHours(0)
    setMinutes(0)
    setSeconds(0)
    setStartwatch(false)
  }
    useEffect(()=>{ 
      let timer;
      if(startWatch){
         timer=setTimeout(()=>{
      //    console.log('the seconds are : ',seconds);
          if(seconds===59){
              if(minutes===59){
                  setHours(prev=>prev+1)
                  setMinutes(0)
              }else{
                  setMinutes(prev=> prev+1)
              }
              setSeconds(0)
          }
          setSeconds(prev=>prev+1)
      },1000)
      }else{
        clearTimeout(timer)
      }
    return ()=>clearTimeout(timer)
    
    },[seconds,startWatch])
    
  return (

    <div>
      <h2>Stopwatch</h2>
      <div>
        <h4>{hours}::{minutes}::{seconds}</h4>
      </div>
      <div style={{display:'flex', gap:'10px'}}>
        <button onClick={stoptimerHandler}>Stop</button>
        <button onClick={startHandler}>Start</button>
        <button onClick={resetClockHandler}>Clear</button>
      </div>
    </div>
  )
}

export default Stopwatch
