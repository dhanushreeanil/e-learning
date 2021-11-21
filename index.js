import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App'
import configureStore from './store/configureStore'

const store = configureStore()

// // to read updated state value
store.subscribe(()=>{
    console.log('state-updated',store.getState())
})

ReactDOM.render(
  <Provider store = { store } >
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
