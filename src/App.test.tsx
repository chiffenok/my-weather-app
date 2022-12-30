import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders app title', () => {
    render(<App />)
    const linkElement = screen.getByText(/My Weather App/i)
    expect(linkElement).toBeInTheDocument()
  })
})
