import  { useEffect } from 'react'

const ThiteenthQuestion = () => {
    useEffect(()=>{
        let timer= setTimeout(()=>{
            alert('Congrats!! You can see the toast!')
        },5000);

        return ()=>{
            clearTimeout(timer)
        }
    },[])
  return (
    <div>
      <h2>Display thge Toast here</h2>
    </div>
  )
}

export default ThiteenthQuestion
