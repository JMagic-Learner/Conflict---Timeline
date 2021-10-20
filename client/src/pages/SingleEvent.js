import React, { useState } from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_EVENT } from '../utils/queries';
import { REMOVE_COMMENT } from '../utils/mutations';
import { SAVE_EVENT } from '../utils/mutations';
import { EDIT_COMMENT } from '../utils/mutations';



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
  const [editEventComment] = useMutation(EDIT_COMMENT);




  const event = data?.event || {};
  const commentArray = event.comments;
  console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
  console.log("The page has reloaded");
  console.log("the event _ID is:++ " + event._id);
  const globalEventId = event._id;
  console.log("the eventText that will be populated as the description:++ " + event.eventText);
  console.log("the eventTitle that will be the conflict name:++ " + event.eventTitle);
  // const commentIdentifier = commentArray.map(comment) 

  async function savingEvent(eventidentifier2) {
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("The savingEvent function has been called");
    console.log("This is the event._id from the global: " + event._id);
    console.log("This is the eventidentifier2 being passed into savingEvent: " + eventidentifier2);
    try {
      const response = await saveEvent({
        variables: { eventId: eventidentifier2 }
      });

      if (!response) {
        console.log("There is no data being saved to User");
        throw new Error("there is no response");
      }
    } catch (err) {
      console.error(err);
    }

  }

  function intermediarTest(commentId) {
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("intermediarTest has been called");
    //   const commentId = commentArray.map(function (comment, _id) {
    //     return comment._id;
    // });
    console.log("The commentId has been mapped");
    const eventIdentifier1 = event._id;
    console.log("The event._id value has been captured by " + eventIdentifier1);
    console.log("The commentid has been captured by " + commentId);
    //  let morph = commentId;
    // morph = '616a52120d9eec293cd03cc6'
    onDelete(commentId, eventIdentifier1);
  }
  // This function will handle deleting the comment.
  // const onDelete = (commentId , eventIdentifier) => removeComment(
  //   { variables: { commentId: commentId, eventId: eventId } }
  // );

function readValue() {
  console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
  console.log("readvalue has been called");
}


async function editComment(value1, value2)  {
  
  console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
  console.log("editComment has been called");
  console.log('this is the (global) event_id ' + globalEventId);
  if (value1 ) {
  console.log('this is the commentID ' + value1);
  }
  if (value2) {
    console.log('this is the commentText' + value2);
  }
let modify = value2;
// Value2 is supposed to be the value of the new 
modify = "This is changing";
   try {
     const response = await editEventComment({
       variables: { eventId: globalEventId , commentId: value1, commentText: modify}
     });

     if (!response) {
       console.log("There is no data being saved to User");
       throw new Error("there is no response");
   }
   } catch (err) {
     console.error(err);
   }
}

  async function onDelete(commentId, eventIdentifier) {
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("onDelete function has been called");
    const testPass = eventIdentifier;
    const testPass2 = commentId;
    console.log("the value of the event._id: " + testPass + " has been passed through into the onDelete function");
    console.log("the value of the comment._id: " + testPass2 + " has been passed through into the onDelete function");
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
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {event.eventTitle} <br />
        <span style={{ fontSize: '1rem' }}>
          had this event on {event.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {event.eventText}

        </blockquote>

      </div>
      <div className="card-header bg-dark text-light p-2 m-0">
        <button key={event._id} className="btn btn-primary btn-block py-3" type="submit" onClick={() => (savingEvent(event._id))} >
          Save this event!
        </button>

      </div>

      <div className="my-5">
        {/* <CommentList 
        comments= {event.comments}
        eventId={event._id}
        /> */}

        <h3
          className="p-5 display-inline-block"
          style={{ borderBottom: '1px dotted #1a1a1a' }}
        >
          Comments
        </h3>
        <div className="flex-row my-4">
          {commentArray &&
            commentArray.map((comment) => (
              <div key={comment._id} className="col-12 mb-3 pb-3">
                <div className="p-3 bg-dark text-light">
                  <p className="card-header">
                    Comment ID:{' '} {comment._id}
                  </p>
                  <h5 className="card-header">
                    {comment.commentAuthor} commented{' '}
                    <span style={{ fontSize: '0.825rem' }}>
                      on {comment.createdAt}
                    </span>
                  </h5>
                  <p className="card-body">{comment.commentText}</p>

                </div>
                <button key={comment._id} className="btn btn-primary btn-block py-3" id={comment._id} type="submit" onClick={() => (intermediarTest(comment._id))} >
                  Delete Comment
                </button>


                <form
                  className="flex-row justify-center justify-space-between-md align-center"
                  id={comment._id, comment.commentText}
                  onSubmit={e => {e.preventDefault();
                    editComment(comment._id, comment.commentText)
                    }
                  }
                  // onSubmit={() => (editComment(comment._id, comment.commentText))}
                  // onSubmit={test}
                >
                  <div className="col-12 col-lg-9">
                    <textarea
                      name="commentText"
                      placeholder="EDIT YOUR COMMENT"
                      value={comment.commentText}
                      // value={commentText}
                      className="form-input w-100"
                      style={{ lineHeight: '1.5', resize: 'vertical' }}
                      onChange={readValue}
                      // onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="col-12 col-lg-3">
                    <button className="btn btn-primary btn-block py-3" type="submit">
                      Edit Comment
                    </button>
                  </div>
                </form>
              </div>
            ))}
        </div>

      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm eventId={event._id} />
      </div>
    </div>
  );
};

export default SingleEvent;
