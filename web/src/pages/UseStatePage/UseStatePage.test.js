import { render } from '@redwoodjs/testing/web'

import UseStatePage from './UseStatePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UseStatePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UseStatePage />)
    }).not.toThrow()
  })
})
