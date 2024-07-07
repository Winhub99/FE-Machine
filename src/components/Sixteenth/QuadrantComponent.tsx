import  { useEffect, useState } from 'react'

const QuadrantComponent = () => {
   
    const [clicked,setClicked] = useState(false)
    
    const clickHandler = ()=>{

        setClicked(true)
    }

    useEffect(()=>{

        return ()=> {
          console.log('the clicked state was false');
          
            if(clicked){
                console.log('the clicked state is : ', clicked);
                
            setClicked(false)
        }
        }
    },[clicked])
  return (
    <div style={{width:'50px',height:'50px', backgroundColor:'blue',margin:'2px'}} onClick={clickHandler}>
      {clicked && <h6>Clicked!</h6>}
    </div>
  )
}

export default QuadrantComponent
