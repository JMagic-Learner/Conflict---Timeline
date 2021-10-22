// This is where my Hero will render
import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../../assets/home.jpg"
// import Social from "./Social";
import Hidden from "@material-ui/core/Hidden";
import Zoom from "@material-ui/core/Zoom";
// Photo by < a href = "https://unsplash.com/@stijnswinnen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" > Stijn Swinnen</a > on < a href = "https://unsplash.com/s/photos/history?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" > Unsplash</a >

// stijn - swinnen - qwe8TLRnG8k - unsplash.jpg
// https://unsplash.com/photos/qwe8TLRnG8k
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
              <Typography component="h5" variant="h5">
                “History is not the past but a map of the past, drawn from a particular point of view, to be useful to the modern traveller.”
                Henry Glassie, US Historian
              </Typography>
              <Typography component="h4" variant="h4">
                The Historian is an application that takes you back in time to shift across time periods and learn about their most significant events and conflicts that shaped our modern life.
                This application will provide infromation on various conflicts that occured during the 20th, as we hope future genrations could learn from them.               
                </Typography>
              <Box my={2}>
                <Button
                  href="mailto:mohamed.mesahel86@gmail.com"
                  variant="outlined"
                  color="secondary"
                >
                  Get in Touch with Mohamed!
                </Button>
              </Box>
              <Box my={2}>
                <Button
                  href="mailto:majason93@gmail.com"
                  variant="outlined"
                  color="secondary"
                >
                  Get in Touch with Jason!
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

