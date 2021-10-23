const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    events: [Event]!
  }

  type Event {
    _id: ID
    eventText: String
    eventTitle: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  } 

  type Query {
    users: [User]
    user(username: String!): User
    events(username: String): [Event]
    event(eventId: ID!): Event
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveEvent(eventId: ID!): User
    addComment(eventId: ID!, commentText: String!): Event
    editEventComment(eventId: ID!, commentId: ID, commentText: String): Event
    # deleteEventComment(commentId: String): Event

    # removeEvent(eventId: ID!): Event
   removeComment(eventId: ID!, commentId: ID!): User
  }
`;

module.exports = typeDefs;
