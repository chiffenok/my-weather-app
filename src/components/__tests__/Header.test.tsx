import { render } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
  it('matches snapshot', () => {
    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()
  })
})
