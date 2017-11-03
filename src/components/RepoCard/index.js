import React from 'react'
import Paper from 'material-ui/Paper'
import './RepoCard.css'
import FolderIcon from 'material-ui/svg-icons/file/folder-shared'

const RepoCard = (props) => {
  const { repo } = props
  return(
    <Paper style={styles.paper}>
      <FolderIcon style={{width:'40px',height:'40px'}} />
      <div className='content'>
        <p><strong>{repo.name}</strong></p>
        <p>{repo.full_name}</p>
        <p>By: <strong>{repo.owner.login}</strong></p>
      </div>
    </Paper>
  )
}

const styles = {
  paper: {
    display:'flex',
    alignItems: 'center',
    paddingTop: '5px',
    paddingBottom: '5px',
    paddingLeft: '20px',
    paddingRight: '20px',
    margin: '10px',
    width: '400px',
  }
}

export default RepoCard
