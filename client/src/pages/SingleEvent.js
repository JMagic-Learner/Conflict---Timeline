import React, {useState } from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_EVENT } from '../utils/queries';
import { REMOVE_COMMENT } from '../utils/mutations';

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
      }, }
  );
const TestingOnDelete = (commentId, eventId) => {
  console.log("we Have clicked the delete button");
  onDelete (commentId, eventId);
}
  // This function will handle deleting the comment.
const onDelete = (commentId , eventId) => removeComment(
  { variables: { commentId: commentId, eventId: eventId } }
);
  
  const event = data?.event || {};
  const commentArray = event.comments;
  console.log("the event _ID is:++ " + event._id);
  console.log("the eventText that will be populated as the description:++ " + event.eventText);
  console.log("the eventTitle that will be the conflict name:++ " + event.eventTitle);
 


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
                <h5 className="card-header">
                  {comment.commentAuthor} commented{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {comment.createdAt}
                  </span>
                </h5>
                <p className="card-body">{comment.commentText}</p>
              </div>
               <button className="btn btn-primary btn-block py-3" type="submit" >
                                Edit Comment
                            </button>
                            <button className="btn btn-primary btn-block py-3" type="submit" onDelete={TestingOnDelete} >
                                Delete Comment
                            </button> 
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
