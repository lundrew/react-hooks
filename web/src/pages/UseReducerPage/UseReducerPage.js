import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useReducer } from 'react'

//useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
//https://reactjs.org/docs/hooks-reference.html#usereducer

// The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case , as well as statements in case s that follow the matching case .

{
  /* case 'INCREMENT':
 return { count: state.count + action.payload, showText: state.showText }
*/
}
{
  /* <button
        onClick={() => {
          dispatch({ type: 'INCREMENT', payload: 1 })
          dispatch({ type: 'toggleShowText' })
        }}
      >
        Click Here
      </button> */
}
//the top code is working the same way as the working code below. "+ action.payload" works when its taking the "payload: 1" instead of a "+ 1" on line 31
//https://devtrium.com/posts/how-to-use-react-usereducer-hook

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, showText: state.showText }
    case 'toggleShowText':
      return {
        count: state.count,
        showText: !state.showText,
      }
    default:
      return state
  }
}

const UseReducerPage = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })
  return (
    <div>
      <div className="hook-container">
        <h1>UseReducer 1</h1>
        <h1>{state.count}</h1>
        <button
          onClick={() => {
            dispatch({ type: 'INCREMENT' })
            dispatch({ type: 'toggleShowText' })
          }}
        >
          Click Here
        </button>
        {state.showText && <p>This is a Text</p>}
      </div>
    </div>
  )
}

export default UseReducerPage
