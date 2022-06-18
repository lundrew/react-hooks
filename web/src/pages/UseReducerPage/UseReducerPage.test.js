import { render } from '@redwoodjs/testing/web'

import UseReducerPage from './UseReducerPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UseReducerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UseReducerPage />)
    }).not.toThrow()
  })
})
