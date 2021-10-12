import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_EVENT = gql`
  mutation saveEvent($eventId: ID!) {
    saveEvent(eventId: $eventId) {
      _id
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($eventId: ID!, $commentText: String!) {
    addComment(eventId: $eventId, commentText: $commentText) {
      _id
      eventText
      eventTitle
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
