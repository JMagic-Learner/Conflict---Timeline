import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { QUERY_COMMENTS } from "../utils/mutations";
import { QUERY_SINGLE_EVENT } from '../utils/queries';
import { useQuery } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  spacing: {
    margin: "15px 0",
  },
});

const Comments = ({ commentText, id, onDelete, openModal }) => {
  const classes = useStyles();

  const { loading, data } = useQuery(QUERY_SINGLE_EVENT, {
    // pass URL parameter
    variables: { eventId: eventId },
  });
  const event = data?.event || {};
  const commentArray = event.comments;
  return (
    <Card className={classes.spacing}>
      <CardContent>
        <Typography>{text}</Typography>
      </CardContent>

      <CardActions>
        <Button onClick={() => openModal(id)} size="small" color="primary">
          Edit
        </Button>
        <Button onClick={() => onDelete(id)} size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

const Comments = ({ onDelete, openModal }) => {
  const { loading, error, data } = useQuery(QUERY_COMMENTS);
  if (loading) {
    return "loading";
  }
  if (error) {
    return "error";
  }

  return data.comments.map((comment) => (
    <Comment openModal={openModal} onDelete={onDelete} {...blogPostData} key={blogPostData.id} />
  ));
};

export default BlogPosts;