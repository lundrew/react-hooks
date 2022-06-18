// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import HookLayout from './layouts/HooksLayout/HooksLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={HookLayout}>
        <Route path="/use-effect" page={UseEffectPage} name="useEffect" />
        <Route path="/use-state" page={UseStatePage} name="useState" />
        <Route path="/use-reducer" page={UseReducerPage} name="useReducer" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
