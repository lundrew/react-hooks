import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import React, { useState } from 'react'

const UseStatePage = () => {
  //UseState 1
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  //UseState 2

  const [inputValue, setInputValue] = useState('Type Something')

  let onChange = (event) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }

  //UseState 3
  const firstNames = ['Name', 'Joe', 'Jan', 'Jack', 'John']

  const [nameHolder, setHolder] = useState('Your')

  const nameChanger = () => {
    let fN = firstNames.splice(0, 1)
    setHolder(fN)
  }

  //UseState 4
  const [name, setName] = useState('Brad')

  if (name === 'Brad') {
    setName('John')
  }

  return (
    <div>
      <div className="hook-container">
        <h1>UseState 1</h1>
        {counter} <button onClick={increment}>Increment</button>
      </div>
      <div className="hook-container">
        <h1>UseState 2</h1>
        <input placeholder="enter something" onChange={onChange} />
        {inputValue}
      </div>
      <div className="hook-container">
        <h1>UseState 3</h1>
        {nameHolder}
        <button onClick={nameChanger}>Change Name</button>
      </div>
      <div className="hook-container">
        <h1>UseState 4</h1>
        <p> My name is /{name}/ </p>
      </div>
    </div>
  )
}

export default UseStatePage
