import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
// Building new components element to handle NY times API search form 
import News from '../components/NewsForm/index'
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import EventList from '../components/EventList';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth'; import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@material-ui/core/Typography";
import Container from '@mui/material/Container';
import { makeStyles } from "@material-ui/core/styles";
import Image from "../assets/books.jpg"

const useStyles = makeStyles((theme) => ({

  container: {
    height: "100%",

  },
  grid: {
    backgroundImage: `url(${Image})`,

  }

}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const Profile = () => {
  const styles = useStyles();

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <Container className={styles.container} maxWidth="md">
        <Item><Box my={3} px={5}>
          <Typography align="center" component="h5" variant="h5">
            You need to be logged in to see this. Use the navigation links above to
            sign up or log in!
          </Typography>

        </Box></Item>
      </Container>

    );
  }
  return (

    <Toolbar disableGutters>
      <Grid className={styles.grid} container margin="auto"  spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item >
            <Box backgroundColor="green" my={2}>
              <Typography align="center" component="h5" variant="h5">
                Viewing {userParam ? `${user.username}'s` : 'your'} profile.
              </Typography>
            </Box>
          </Item>

          <Item><Box my={2}>
            <EventList
              events={user.events}
              title={`${user.username}'s events...`}
              showTitle={true}
              showUsername={false}
            />
          </Box>
          </Item>

        </Grid>
        <Grid item xs={8}>
          <Item >
            <Box backgroundColor="green" my={2}>
              <Typography align="center" component="h5" variant="h5">
                Search the NY Times Articales and Archives
              </Typography>
            </Box>
          </Item>

          <Item>
            <Box my={2}>
              <News />
              {/* Here I am importing the news */}
            </Box>
          </Item>

        </Grid>
      </Grid>
    </Toolbar>

    // </Container>


  );
}
export default Profile;

