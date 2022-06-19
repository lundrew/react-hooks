import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import React, { useRef, useState } from 'react'

const UseRefPage = () => {
  // UseRef 1
  // explanation: we are using useRef and useState, giving the current state an empty string, and when we use our click function, we take that inputRef's current value and give it a variable...we then use the setValue function to update that value with useState.
  const inputRef = useRef(null)
  const [value, setValue] = useState('')

  const onClick = () => {
    let word = inputRef.current.value
    setValue(word)
  }

  // UseRef 2

  return (
    <>
      <div>
        <div className="hook-container">
          <h1>UseRef 1</h1>
          <input type="text" ref={inputRef} placeholder="Ex..." />
          <button onClick={onClick}>Change Name</button>
          <div>{value}</div>
        </div>

        <div className="hook-container">
          <h1>UseRef 2</h1>
        </div>
      </div>
    </>
  )
}

export default UseRefPage
