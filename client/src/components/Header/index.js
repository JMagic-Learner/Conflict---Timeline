import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
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
// So far all elements are functional just having a problem coming from one of the components after all done will see what happens
// const navigationLinks = [
//   { name: "The Historian", href: "/" },
//   { name: "Profile", href: "/me" },
//   { name: "WikiSearch", href: "/search" },
//   { name: "Logout", href: "/logout" },
//   { name: "Login", href: "/login" },
//   { name: "Signup", href: "/signup" },
//   // { name: "", href: "/" },
// ];

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
  },
  // No need for the Avatar for now however we can use it for later 
  // avatar: {
  //   marginRight: "auto",
  //   color: "white",
  //   backgroundColor: "black",
  //   borderRadius: 0,
  //   height: 30,
  //   border: "2px solid gray",
  //   borderLeft: "12px solid transparent",
  //   borderRight: "12px solid transparent",
  // },
  // Same for the head operation I will wait and see what happens after fixing all other coponents
  // headerOptions: {
  //   display: "flex",
  //   flex: 2,
  //   justifyContent: "space-evenly"
  // }
}));

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
          <ToolBar disableGutters >
            <Hidden xsDown>
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
                  <Link
                    className={styles.link}
                    color="textPrimary"
                    variant="button"
                    onClick={logout}
                    underline="none"
                  // key={item.name}
                  >
                    Logout
                  </Link>
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

            </Hidden>
            <Hidden smUp>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Hidden>
          </ToolBar>
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
                  <Link
                    className={styles.link}
                    // onClick={logout}
                    color="textPrimary"
                    variant="button"
                    underline="none"
                    href="/"
                  // key={item.name}
                  >
                    Logout
                  </Link>
{/* 
                  <Box my={2}>
                    <Button
                      onClick={logout}
                      variant="outlined"
                      color="secondary"
                    >
                      Logout
                    </Button>
                  </Box> */}
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

// //* <Box my={2}>
//                   <Button
//                     onClick={logout}
//                     variant="outlined"
//                     color="secondary"
//                   >
//                     Logout
//                   </Button>
//                 //</Box> */
// import React from 'react';
// import { Link } from 'react-router-dom';

// import Auth from '../../utils/auth';

// const Header = () => {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };
//   return (
//     <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
//       <div className="container flex-row justify-space-between-lg justify-center align-center">
//         <div>
//           <Link className="text-light" to="/">
//             <h1 className="m-0">The Historian</h1>
//           </Link>
//           <p className="m-0">See the forgotten history</p>
//         </div>
//         <div>
//           {Auth.loggedIn() ? (
//             <>
//               <Link className="btn btn-lg btn-info m-2" to="/me">
//                 {Auth.getProfile().data.username}'s profile
//               </Link>
//               <Link className="btn btn-lg btn-info m-2" to="/search">
//                 WikiSearch
//               </Link>
//               <button className="btn btn-lg btn-light m-2" onClick={logout}>
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link className="btn btn-lg btn-info m-2" to="/login">
//                 Login
//               </Link>
//               <Link className="btn btn-lg btn-info m-2" to="/search">
//                 WikiSearch
//               </Link>
//               <Link className="btn btn-lg btn-light m-2" to="/signup">
//                 Signup
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
