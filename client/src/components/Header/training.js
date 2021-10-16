import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Auth from '../../utils/auth';
const navigationLinks = [
    { name: "The Historian", href: "/" },
    { name: "Profile", href: "/me" },
    { name: "Login", href: "/login" },
    { name: "WikiSearch", href: "/search" },
    { name: "Signup", href: "/signup" },
    // { name: "", href: "/" },
];

const useStyles = makeStyles((theme) => ({
    link: {
        marginRight: 20,
    },
    avatar: {
        marginRight: "auto",
        color: "white",
        backgroundColor: "black",
        borderRadius: 0,
        height: 30,
        border: "2px solid gray",
        borderLeft: "12px solid transparent",
        borderRight: "12px solid transparent",
    },
}));

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    const styles = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <AppBar position="sticky" color="default">
            <Container maxWidth="md">
                <ToolBar disableGutters>
                    <Avatar className={styles.avatar}>P</Avatar>
                    <Hidden xsDown>
                        {navigationLinks.map((item) => (
                            <Link
                                className={styles.link}
                                color="textPrimary"
                                variant="button"
                                underline="none"
                                href={item.href}
                                key={item.name}
                            >
                                {item.name}
                            </Link>
                        ))}
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
                    {navigationLinks.map((item) => (
                        <ListItem key={item.name}>
                            <Link
                                className={styles.link}
                                color="textPrimary"
                                variant="button"
                                underline="none"
                                href={item.href}
                            >
                                {item.name}
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
        </AppBar>
    );
    // return (
    //   <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
    //     <div className="container flex-row justify-space-between-lg justify-center align-center">
    //       <div>
    //         <Link className="text-light" to="/">
    //           <h1 className="m-0">The Historian</h1>
    //         </Link>
    //         <p className="m-0">See the forgotten history</p>
    //       </div>
    //       <div>
    //         {Auth.loggedIn() ? (
    //           <>
    //             <Link className="btn btn-lg btn-info m-2" to="/me">
    //               {Auth.getProfile().data.username}'s profile
    //             </Link>
    //             <Link className="btn btn-lg btn-info m-2" to="/search">
    //               WikiSearch
    //             </Link>
    //             <button className="btn btn-lg btn-light m-2" onClick={logout}>
    //               Logout
    //             </button>
    //           </>
    //         ) : (
    //           <>
    //             <Link className="btn btn-lg btn-info m-2" to="/login">
    //               Login
    //             </Link>
    //             <Link className="btn btn-lg btn-info m-2" to="/search">
    //               WikiSearch
    //             </Link>
    //             <Link className="btn btn-lg btn-light m-2" to="/signup">
    //               Signup
    //             </Link>
    //           </>
    //         )}
    //       </div>
    //     </div>
    //   </header>
    // );
};

export default Header;

