import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_COMMENT } from '../utils/mutations';
import { SAVE_EVENT } from '../utils/mutations';
import { ADD_COMMENT } from '../utils/mutations';
import { EDIT_COMMENT} from '../utils/mutations';
import { QUERY_SINGLE_EVENT } from '../utils/queries';
import Container from "@material-ui/core/Container";
import CommentForm from "../components/Comments/CommentForm";
import Comments from "../components/Comments/Comments";
import EditModal from "../components/Comments/EditModal";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";


const SingleEvent = () => {
    const { eventId } = useParams();
    const [commentText, setCommentText] = useState('');

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
    const [addComment] = useMutation(ADD_COMMENT);
    
    const event = data?.event || {};
  const commentArray = event.comments;
  console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
  console.log("The page has reloaded");
  console.log("the event _ID is:++ " + event._id);
  const globalEventId = event._id;
  console.log("the eventText that will be populated as the description:++ " + event.eventText);
  console.log("the eventTitle that will be the conflict name:++ " + event.eventTitle);


  const onSubmit = (e) => {
    e.preventDefault();
    addComment({ variables: { commentText: e.target.commentText.value } });
  };

  const onDelete = (id) => removeComment({ variables: { id } });

  const [editId, setEditId] = useState("");

  const onClose = () => setEditId("");
  const openModal = (id) => setEditId(id);

  const [editComment] = useMutation(EDIT_COMMENT, {
    onCompleted: () => setEditId(""),
  });

  const onSaveEdit = (e) => {
    e.preventDefault();
    editComment({ variables: { id: editId, commentText: e.target.commentText.value } });
  };

  return (
    <Container maxWidth="xs">
       <Grid item xs={8}> 
      <Box>
      <Typography component="h3" variant="h3">
      {event.eventTitle}
      {event.createdAt}
    </Typography>
      </Box>
      
      <Box my={3} px={5}>
          <Typography align="center" component="h5" variant="h5">
          {event.eventText}
          </Typography>

        </Box>
      

      <EditModal isOpen={!!editId} onClose={onClose} onSubmit={onSaveEdit} />
      <CommentForm onSubmit={onSubmit} />
      {/* <Comments onDelete={onDelete} openModal={openModal} /> */}
      </Grid>
    </Container>

  );
}

export default SingleEvent;
