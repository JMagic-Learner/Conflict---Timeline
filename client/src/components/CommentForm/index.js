import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import TextField from "@material-ui/core/TextField";
import Grid from "@mui/material/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper';
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { ADD_COMMENT } from '../../utils/mutations';

import Auth from '../../utils/auth';

const CommentForm = ({ eventId }) => {

  const [commentText, setCommentText] = useState('');

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          eventId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });
      // Run Save events here
      // have a btn to save event on the home page 
      setCommentText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCommentText(value);

  };

  return (
    <Paper disableGutters>

      <Toolbar >

        <Grid container margin="auto" spacing={2} >
          <Box disablegutters my={2} mx={10}>

            <Typography component="h4" variant="h4">
              Would you like to share your experience on this event?
            </Typography>
          </Box>


          {Auth.loggedIn() ? (
            <>
              <Grid item xs={16}>
                <form onSubmit={handleFormSubmit}>
                  <TextField
                    name="commentText"
                    value={commentText}
                    noValidate
                    fullWidth
                    variant="filled"
                    color="primary"
                    multiline
                    rows={3}
                    margin="normal"
                    name="text"
                    onChange={handleChange}
                  >
                  </TextField>

                  <Button variant="contained" color="primary" type="submit">
                    Add Comment
                  </Button>

                </form>
              </Grid>
              <br>
              </br>
            </>
          ) : (
            <Box disableGutters my={2}>
              <Typography variant="h5" gutterBottom>
                <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
              </Typography>
            </Box>

          )}
        </Grid>

      </Toolbar>
    </Paper>

  );
};

export default CommentForm;

