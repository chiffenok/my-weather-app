import { render, screen } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'

describe('App', () => {
  it('renders app title', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    )
    const linkElement = screen.getByText(/My Weather App/i)
    expect(linkElement).toBeInTheDocument()
  })
})
