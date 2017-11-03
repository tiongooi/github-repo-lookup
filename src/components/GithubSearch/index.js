import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateInput, getRepo, clearMessage } from '../../actions/search'
import Snackbar from 'material-ui/Snackbar'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import CircularProgress from 'material-ui/CircularProgress'
import SearchIcon from 'material-ui/svg-icons/action/search'
import RepoCard from '../RepoCard'
import './GithubSearch.css'

@connect(store => ({
  searchValue: store.search.input,
  repos: store.search.data,
  isFetching: store.search.isFetching,
  pageMessage: store.search.message,
}),{
  updateInput,
  getRepo,
  clearMessage,
})
export default class GithubSearch extends Component {
  constructor(props) {
    super(props)
    this.handleUpdateSearch = this.handleUpdateSearch.bind(this)
    this.clearPageMessage = this.clearPageMessage.bind(this)
  }

  handleUpdateSearch(e,v) {
    this.props.updateInput(v)
  }

  handleSearch({ searchValue: query }) {
    this.props.getRepo(query)
  }

  clearPageMessage() {
    this.props.clearMessage()
  }

  render() {
    return(
      <div className='page-layout'>
        <div className='search-field'>
          <TextField
            hintText='Search'
            onChange={this.handleUpdateSearch}
            value={this.props.searchValue}
            style={{marginLeft: '50px'}}
           />
           <FlatButton
             icon={<SearchIcon />}
             style={{margin:'15px'}}
             onClick={()=> this.handleSearch(this.props)}
            />
        </div>
        {
          this.props.isFetching ?
          <div className='loading-container'><CircularProgress /></div>
          :
          this.props.repos.map(repo => <RepoCard key={repo.id} repo={repo} />)
        }
        <Snackbar
          open={this.props.pageMessage ? true:false}
          message={this.props.pageMessage}
          autoHideDuration={10000}
          onRequestClose={this.clearPageMessage}
        />
      </div>
    )
  }
}
