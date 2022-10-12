import React from 'react'

const Card = ({value}) => {
  console.log(value)
  return (
    value.map((el)=>{

     return <div>
      <div>{el.title}</div>
      <div>{el.body}</div>
    </div>
    })
  )
}

export default Card