import React, { useState } from 'react'

export default function Akash(props){
  const [ isshow, setIsshow]=useState(false)

  const handlechange=()=>{
    setIsshow(! isshow)
  }

  return (
    <div>
      <h1>{props.title}</h1>

      <button onClick={handlechange}> {!isshow ?"+" :"-"} </button>
      {isshow &&
      <p>{props.info}</p>
      }

    </div>
  )
}
