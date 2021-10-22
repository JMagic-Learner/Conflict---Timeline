import React, { useState } from 'react';
// import '../components/CommentList/style.css';
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Typography from "@material-ui/core/Typography";
import {
  Button,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_EVENT } from '../utils/queries';
import { REMOVE_COMMENT } from '../utils/mutations';
import { SAVE_EVENT } from '../utils/mutations';



const SingleEvent = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { eventId } = useParams();
  const [renderComment, commentState] = useState('false');

  const { loading, data } = useQuery(QUERY_SINGLE_EVENT, {
    // pass URL parameter
    variables: { eventId: eventId },
  });

  const [removeComment] = useMutation(REMOVE_COMMENT
    , {
      onCompleted: (data) => {
        window.location.reload();
      },
    }
  );

  const [saveEvent] = useMutation(SAVE_EVENT);




  const event = data?.event || {};
  const commentArray = event.comments;
  // console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
  // console.log("The page has reloaded");
  // console.log("the event _ID is:++ " + event._id);
  // console.log("the eventText that will be populated as the description:++ " + event.eventText);
  // console.log("the eventTitle that will be the conflict name:++ " + event.eventTitle);
  // const commentIdentifier = commentArray.map(comment) 

  async function savingEvent(eventidentifier2) {
    // console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    // console.log("The savingEvent function has been called");
    // console.log("This is the event._id from the global: " + event._id);
    // console.log("This is the eventidentifier2 being passed into savingEvent: " + eventidentifier2);
    try {
      const response = await saveEvent({
        variables: { eventId: eventidentifier2 }
      });

      if (!response) {
        // console.log("There is no data being saved to User");
        throw new Error("there is no response");
      }
    } catch (err) {
      console.error(err);
    }

  }

  function intermediarTest(commentId) {
    // console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    // console.log("intermediarTest has been called");
    //   const commentId = commentArray.map(function (comment, _id) {
    //     return comment._id;
    // });
    console.log("The commentId has been mapped");
    const eventIdentifier1 = event._id;
    // console.log("The event._id value has been captured by " + eventIdentifier1);
    // console.log("The commentid has been captured by " + commentId);
    //  let morph = commentId;
    // morph = '616a52120d9eec293cd03cc6'
    onDelete(commentId, eventIdentifier1);
  }
  // This function will handle deleting the comment.
  // const onDelete = (commentId , eventIdentifier) => removeComment(
  //   { variables: { commentId: commentId, eventId: eventId } }
  // );



  async function onDelete(commentId, eventIdentifier) {
    // console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    const testPass = eventIdentifier;
    const testPass2 = commentId;
    // console.log("the value of the event._id: " + testPass + " has been passed through into the onDelete function");
    // console.log("the value of the comment._id: " + testPass2 + " has been passed through into the onDelete function");
    try {
      const response = await removeComment({
        variables: { eventId: eventIdentifier, commentId: commentId }
      });

      if (!response) {
        console.log("There is no data being removed via onDelete");
        throw new Error("there is no response");
      }
    } catch (err) {
      console.error(err);
    }


  }

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Toolbar disableGutters>
      <Grid container margin="auto" spacing={2} columns={16}>
        <Grid item xs={16}>
          <Box backgroundColor="default" my={2}>
            <Typography align="center" component="h3" variant="h3">
              {event.eventTitle}
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="body1" gutterBottom>
              {event.eventText}
            </Typography>
          </Box>

          <Box my={2}>
            <Button
              type="submit"
              color="default"
              size="medium"
              key={event._id}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => (savingEvent(event._id))}
            >
              Save This Event
            </Button>
          </Box>

        </Grid>
        <Grid item xs={16}>
          <Typography align="left" component="h3" variant="h3">
            Comments
          </Typography>
          <br>
          </br>
          {commentArray &&
            commentArray.map((comment) => (
              <Card key={comment._id}>
                <CardContent >
                  <Typography variant="body1" gutterBottom>
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {comment.commentAuthor} commented{' '}
                    on {comment.createdAt}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {comment.commentText}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button variant="text" style={{ color: "#90caf9", fontWeight: 700 }}>
                    Edit Comment
                  </Button>
                  <Button variant="text"
                    style={{ color: "#90caf9", fontWeight: 700 }}
                    key={comment._id}
                    id={comment._id} type="submit"
                    onClick={() => (intermediarTest(comment._id))}
                  >
                    Delete Comment
                  </Button>
                </CardActions>
              </Card>
            ))}
        </Grid>

        <CommentForm eventId={event._id} />

      </Grid>
    </Toolbar>
  );
};

export default SingleEvent;

