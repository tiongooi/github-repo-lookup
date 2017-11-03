import React from 'react'
import Paper from 'material-ui/Paper'
import FolderIcon from 'material-ui/svg-icons/file/folder-shared'
import DownloadIcon from 'material-ui/svg-icons/file/file-download'
import FlatButton from 'material-ui/FlatButton'
import './RepoCard.css'

const RepoCard = (props) => {
  const { repo } = props
  return(
    <Paper style={styles.paper}>
      <FolderIcon color='#9C27B0' style={{width:'50px',height:'50px',marginLeft:'15px'}} />
      <div className='content'>
        <p>{repo.name}</p>
        <p>{repo.full_name}</p>
        <p>By: <strong>{repo.owner.login}</strong></p>
      </div>
      <FlatButton
        icon={<DownloadIcon color='grey' style={{width:'25px',height:'25px'}} />}
        onClick={()=>alert('coming soon')}
       />
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
    width: '550px',
  }
}

export default RepoCard
