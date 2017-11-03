import React from 'react'
import ReactDOM from 'react-dom'
import GithubSearch from './index'
import { Provider } from 'react-redux'
import store from '../../store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

test('GithubSearch can be render', () => {
  const test_div = document.createElement('div')

  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider>
        <GithubSearch />
      </MuiThemeProvider>
    </Provider>
  , test_div)

})
