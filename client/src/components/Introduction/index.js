// This is where my Hero will render
import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Zoom from "@material-ui/core/Zoom";
import Image from "../../assets/home.jpg"

// Photo by < a href = "https://unsplash.com/@stijnswinnen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" > Stijn Swinnen</a > on < a href = "https://unsplash.com/s/photos/history?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" > Unsplash</a >

// stijn - swinnen - qwe8TLRnG8k - unsplash.jpg
// https://unsplash.com/photos/qwe8TLRnG8k
// On the Top those are some links for the pics that we will try to use as background
// Using Styles from Material UI to Render img from unsplash
const useStyles = makeStyles((theme) => ({
  section: {
    height: "90vh",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    position: "relative",
  },
  content: {
    height: "100%",
    zIndex: 100,
    position: "relative",
  },
  container: {
    height: "100%",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 2,
  },
  heroImage: {
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
}));

// This where our main intro should go however I was thinking to add a Gallary Slider in the body of the Container
const Introduction = () => {

  const styles = useStyles();
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => setShouldShow(true), []);
  return (
    <Paper className={styles.section} id="about">
      <div className={styles.overlay}></div>
      <Container className={styles.container} maxWidth="md">
        <Grid
          className={styles.content}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Zoom in={shouldShow}>
            <Grid item sm={8}>
              <Typography component="h3" variant="h3">
                This is where we will render the introduction to Historian              </Typography>
              <Typography variant="h5">
                This should only be rendered on the Home component
              </Typography>
              <Box my={2}>
                <Button
                  href="mailto:address@email.com"
                  variant="outlined"
                  color="secondary"
                >
                  Get in Touch!
                </Button>
                <Button
                  href="mailto:address@email.com"
                  variant="outlined"
                  color="secondary"
                >
                  Get in Touch!
                </Button>
              </Box>
            </Grid>
          </Zoom>
          <Hidden xsDown>
            <Grid item>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Introduction;

// return (
//   <div>
//     <p> This is where we will render the introduction to Historian</p>
//     <p> This should only be rendered on the Home component</p>
//   </div>
{/* <Social direction="column" /> */ }

// );