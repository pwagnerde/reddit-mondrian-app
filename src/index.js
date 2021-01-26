import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './views/App'
import store from './stores/rootStore'
import { Provider } from 'react-redux'

import { fetchUsers } from './stores/users/usersSlice'

import './stores/api/server'

store.dispatch(fetchUsers())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
