import React from 'react';
import Alert from 'react-bootstrap/Alert'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: '900',
  }
}));

export default function Complete(props) {
  const classes = useStyles();
  let data = {}
  axios({
    method: 'get',
    url: `http://localhost:8000/api/supplier/applications/${window.localStorage.u_id}`
  }).then(res => {
    data = JSON.parse(res.data.applications)
    console.log(data)
  }).catch((err) => {
      
  });
  // Fetch all applications from window.localStorage.u_id

  return (
    <Container component="main" maxWidth="lg">
      <Alert variant="success">
        <Alert.Heading className={classes.title}> Submitted Successfully!</Alert.Heading>
        <br />
                                                      {/* add the props of applications to viewform */}
        <h6>You can track your application status <Alert.Link href="/viewforms">here</Alert.Link>.</h6>
        <br />
      </Alert>
    </Container>
  );
}
