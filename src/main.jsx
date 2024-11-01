import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import configureStore from './store/store.js'

const store = configureStore();

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
