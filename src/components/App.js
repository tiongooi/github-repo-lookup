import React, { Component } from 'react'
import ReadMe from './ReadMe'
import GithubSearch from './GithubSearch'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.state = {
      showReadMe: false,
    }
  }

  handleOpen() {
    this.setState({ showReadMe: true })
  }

  handleClose() {
    this.setState({ showReadMe: false })
  }

  render() {
    const actions = [ <FlatButton label='done' onClick={this.handleClose} /> ]
    return (
      <div className='app'>
        <div style={{backgroundColor:'red'}}><h2>Github Repository Lookup</h2></div>
        <FlatButton label='Learn More' onClick={this.handleOpen} />
        <GithubSearch />
        <Dialog
          title='What is this?'
          modal={false}
          open={this.state.showReadMe}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          actions={actions}
          >
          <ReadMe />
        </Dialog>
      </div>
    )
  }
}
