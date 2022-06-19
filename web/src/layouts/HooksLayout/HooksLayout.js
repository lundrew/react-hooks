import { Link, routes } from '@redwoodjs/router'

const HookLayout = ({ children }) => {
  return (
    <>
      <div className="link-container">
        <ul>
          <li>
            <Link className="link" to={routes.home()}>
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to={routes.useState()}>
              UseState
            </Link>
          </li>
          <li>
            <Link className="link" to={routes.useReducer()}>
              UseReducer
            </Link>
          </li>
          <li>
            <Link className="link" to={routes.useEffect()}>
              UseEffect
            </Link>
          </li>
          <li>
            <Link className="link" to={routes.useRef()}>
              UseRef
            </Link>
          </li>
        </ul>
      </div>
      <div className="line"></div>
      {children}
    </>
  )
}

export default HookLayout
