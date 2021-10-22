// Importing all necessary elemnt from Material UI
import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Typography from '@mui/material/Typography';
import Box from "@material-ui/core/Box";

import ListItem from "@material-ui/core/ListItem";
import Auth from '../../utils/auth';
import { Grid } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
  },

}));
// This is where the header start with the new theme
const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        // p: 1, check if you can see what will change after finishing the  WikiSearch
        // m: 1,
      }}
    >
      <AppBar position="sticky" color="default">
        {/* start of my nav bar */}
        <Container maxWidth="lg">
          <Toolbar disableGutters >
            <Hidden xsDown >
              <Grid container
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                <Grid item >

                  <Link
                    className={styles.link}
                    color="textPrimary"
                    variant="button"
                    underline="none"
                    href="/"
                  // key={item.name}
                  >
                    <Typography variant="h4" gutterBottom component="div">
                      The Historian
                    </Typography>
                    <Typography variant="h5" gutterBottom component="div">
                      See the forgotten history
                    </Typography>
                  </Link>
                </Grid>

                {Auth.loggedIn() ? (
                  <Grid item >
                    <Button
                      className={styles.link}
                      color="textPrimary"
                      variant="button"
                      underline="none"
                      href="/me"
                    // key={item.name}
                    >
                      {Auth.getProfile().data.username}'s profile
                    </Button>
                    <Button
                      className={styles.link}
                      color="textPrimary"
                      variant="button"
                      underline="none"
                      href="/search"
                    // key={item.name}
                    >
                      WikiSearch
                    </Button>
                    <Button
                      className={styles.link}
                      color="textPrimary"
                      variant="button"
                      onClick={logout}
                      underline="none"
                    // key={item.name}
                    >
                      Logout
                    </Button>
                  </Grid>
                ) : (
                  <Grid item >
                      <Button
                      className={styles.link}
                      color="textPrimary"
                      variant="button"
                      underline="none"
                      href="/login"
                    // key={item.name}
                    >
                      Login
                      </Button>

                      <Button
                      className={styles.link}
                      color="textPrimary"
                      variant="button"
                      underline="none"
                      href="/search"
                    // key={item.name}
                    >
                      WikiSearch
                      </Button>
                      <Button
                      className={styles.link}
                      color="textPrimary"
                      variant="button"
                      underline="none"
                      href="/signup"
                    // key={item.name}
                    >
                      Signup
                      </Button>
                  </Grid>
                )}
              </Grid>
            </Hidden>
            <Hidden smUp>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <div
            onClick={() => setOpen(false)}
            onKeyPress={() => setOpen(false)}
            role="button"
            tabIndex={0}
          >
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem>

              {Auth.loggedIn() ? (
                <>
                  <Link
                    className={styles.link}
                    color="textPrimary"
                    variant="button"
                    underline="none"
                    href="/me"
                  // key={item.name}
                  >
                    {Auth.getProfile().data.username}'s profile
                  </Link>
                  <Link
                    className={styles.link}
                    color="textPrimary"
                    variant="button"
                    underline="none"
                    href="/search"
                  // key={item.name}
                  >
                    WikiSearch
                  </Link>

                  <Box my={2}>
                    <Button
                      onClick={logout}
                      variant="outlined"
                      color="secondary"
                    >
                      Logout
                    </Button>
                  </Box>
                </>
              ) : (
                <>
                  <Link
                    className={styles.link}
                    color="textPrimary"
                    variant="button"
                    underline="none"
                    href="/login"
                  // key={item.name}
                  >
                    Login
                  </Link>

                  <Link
                    className={styles.link}
                    color="textPrimary"
                    variant="button"
                    underline="none"
                    href="/search"
                  // key={item.name}
                  >
                    WikiSearch
                  </Link>
                  <Link
                    className={styles.link}
                    color="textPrimary"
                    variant="button"
                    underline="none"
                    href="/signup"
                  // key={item.name}
                  >
                    Signup
                  </Link>
                </>
              )}
            </ListItem>

          </List>
        </SwipeableDrawer>
      </AppBar>
    </Box>

  );

};

export default Header;

