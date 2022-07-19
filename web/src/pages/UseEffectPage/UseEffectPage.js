import { set } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import axios from 'axios'
import { useEffect, useState } from 'react'

// the useEffect hook is just a function that will be called when the page re-renders

const UseEffectPage = () => {
  // UseEffect 1
  const [data, setData] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get('https://swapi.dev/api/people').then((response) => {
      setData(response.data.results[0].name)
      // console.log(
      //   response.data.results.map((person) => ({
      //     text: person[0].text,
      //   }))
      // )
      console.log('API was called')
    })
  }, [])
  // ', []' causes the API to be called only once per page render, if you take away and click button the page will be rendered multiple times

  //UseEffect 2
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json))
  }, [resourceType])

  //UseEffect 3
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])
  return (
    <>
      <div>
        <div className="hook-container">
          <h1>UseEffect 1</h1>
          <div>{data}</div>
          {count}
          <button onClick={() => setCount(count + 1)}>Count</button>
        </div>

        <div className="hook-container">
          <h1>UseEffect 2</h1>
          <button onClick={() => setResourceType('posts')}>Posts</button>
          <button onClick={() => setResourceType('users')}>Users</button>
          <button onClick={() => setResourceType('comments')}>Comments</button>
          <h1>{resourceType}</h1>
          {/* {items.map((item) => {
            {
              return JSON.stringify(item)
            }
          })} */}
        </div>

        <div className="hook-container">
          <h1>UseEffect 3</h1>
          {windowWidth}
          <p>*Resize Window*</p>
        </div>
      </div>
    </>
  )
}

export default UseEffectPage
