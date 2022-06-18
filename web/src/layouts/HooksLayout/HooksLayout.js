import { Link, routes } from '@redwoodjs/router'

const HookLayout = ({ children }) => {
  return (
    <>
      <ul>
        <li>
          <Link to={routes.home()}>Home</Link>
        </li>
        <li>
          <Link to={routes.useState()}>UseState</Link>
        </li>
        <li>
          <Link to={routes.useReducer()}>UseReducer</Link>
        </li>
      </ul>
      {children}
    </>
  )
}

export default HookLayout
