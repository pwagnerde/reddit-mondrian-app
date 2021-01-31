import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../stores/rootStore'
import App from './App'
import ReactDOM from 'react-dom'

describe('app.js', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    )
  })

  it('renders header component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(screen.getByText('Mondrian')).toBeInTheDocument()
  })

    it('renders footer component', () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      )
      expect(screen.getByText('Copyright')).toBeInTheDocument()
    })
})
