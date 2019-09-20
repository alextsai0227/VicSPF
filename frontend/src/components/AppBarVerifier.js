
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';

// React related package
import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
}));

function AppBarVerifier(props) {
  const classes = useStyles();

  function handleAddForm() {
    const path = {
      pathname: '/form',
      state: props.location.state,
    }
    props.history.push(path)
  }

  function handleViewProfile() {
    const path = {
      pathname: '/sup-profile',     // Might be ver-profile !
      state: props.location.state,
    }
    props.history.push(path)
  }

  function handleLogout(evt) {
    localStorage.removeItem('token');
    props.history.push('/login')
  }

  function handleViewForm(evt){
    axios({
      method: 'get',
      url: `http://localhost:8000/api/supplier/applications/${window.localStorage.u_id}`
    }).then(res => {
        const data = props.location.state
        data.applications = res.data.applications
        const path = {
          pathname: '/viewforms',
          state: data,
        }
        props.history.push(path)
    }).catch(err => {
        console.log(err)
    });
    


  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>

          <Typography className={classes.title} variant="h6" noWrap>VicSPF</Typography>
          <div className={classes.grow} />

          {/* add form button */}
          <Tooltip title="Submit New Form">
            <IconButton color="inherit" onClick={handleAddForm}>
              <NoteAddOutlinedIcon />
            </IconButton>
          </Tooltip>

          {/* view sent form button */}
          <Tooltip title="View Sent Forms">
            <IconButton color="inherit" onClick={handleViewForm}>
              <FindInPageOutlinedIcon />
            </IconButton>
          </Tooltip>

          {/* profile button */}
          <Tooltip title="My Profile">
            <IconButton color="inherit" onClick={handleViewProfile}>
              <AccountCircleIcon />
            </IconButton>
          </Tooltip>

          {/* logout button */}
          <Tooltip title="Logout">
            <IconButton color="inherit" onClick={handleLogout} >
              <ExitToApp />
            </IconButton>
          </Tooltip>

        </Toolbar>
      </AppBar>
    </div >
  );
}


export default withRouter(AppBarVerifier);