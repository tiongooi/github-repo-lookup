import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateInput, getRepo } from '../../actions/search'
import RepoCard from '../RepoCard'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import SearchIcon from 'material-ui/svg-icons/action/search'

@connect(store => ({
  searchValue: store.search.input,
  repos: store.search.data,
}),{
  updateInput,
  getRepo,
})
export default class GithubSearch extends Component {
  constructor(props) {
    super(props)
    this.handleUpdateSearch = this.handleUpdateSearch.bind(this)
  }

  handleUpdateSearch(e,v) {
    this.props.updateInput(v)
  }

  handleSearch({ searchValue: query }) {
    this.props.getRepo(query)
  }

  render() {
    return(
      <div style={{backgroundColor:'blue'}}>
        <div>
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
          this.props.repos.map(repo => <RepoCard key={repo.id} repo={repo} />)
        }
      </div>
    )
  }
}
