import { render } from '@redwoodjs/testing/web'

import UseEffectPage from './UseEffectPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UseEffectPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UseEffectPage />)
    }).not.toThrow()
  })
})
