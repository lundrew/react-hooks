import { render } from '@redwoodjs/testing/web'

import UseRefPage from './UseRefPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UseRefPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UseRefPage />)
    }).not.toThrow()
  })
})
