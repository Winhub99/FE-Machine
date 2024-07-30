import React from 'react'
import Card from './Card'

const ReusableCard = () => {
  return (
    <div>
      <Card header="Twitter Header" type="Twitter"/>
      <Card header="FaceBook Header" type="Facebook"/>
      <Card header="Default Header" type="Default"/>


    </div>
  )
}

export default ReusableCard
