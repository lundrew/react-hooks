import { render } from '@redwoodjs/testing/web'

import HooksLayout from './HooksLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HooksLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HooksLayout />)
    }).not.toThrow()
  })
})
