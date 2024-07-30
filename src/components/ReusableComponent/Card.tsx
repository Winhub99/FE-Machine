import React from 'react'

interface CardProps{
  header:string;
  type: 'Facebook' | 'Twitter' | 'Insta';

}

const Card:React.FC<CardProps> = ({header,type}) => {
  return (
    <div>
      {header}
    </div>
  )
}

export default Card
