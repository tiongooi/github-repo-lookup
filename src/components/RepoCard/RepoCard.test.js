import React from 'react'
import ReactDOM from 'react-dom'
import RepoCard from './index'
import { Provider } from 'react-redux'
import store from '../../store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

test('RepoCard can be rendered', () => {
  const test_div = document.createElement('div')

  const repo = {
    name: 'test',
    fullName: 'test',
    owner: {
      login: 'test',
    }
  }

  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider>
        <RepoCard  repo={repo} />
      </MuiThemeProvider>
    </Provider>
  , test_div)
})
