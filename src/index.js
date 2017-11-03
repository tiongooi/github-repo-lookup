import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


ReactDOM.render(<Provider store={store}>
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
</Provider>, document.getElementById('root'))
