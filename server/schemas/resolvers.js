const { AuthenticationError } = require('apollo-server-express');
const { User, Event, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('event');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('events');
    },
    events: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Event.find(params).sort({ createdAt: -1 });
    },
    event: async (parent, { eventId }) => {
      return Event.findOne({ _id: eventId });
    },
    comments: async (parent, { commentId}) => {
      return Comment.find({ _id: commentId});
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('events');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    //{"authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiSGlzdG9yaWFuQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiSGlzdG9yaWFuIiwiX2lkIjoiNjE2MzhhZDM3OGM4NDczYzgwNWE4OWU4In0sImlhdCI6MTYzNDAxNDcxNCwiZXhwIjoxNjM0MDIxOTE0fQ.3jWn6OU47-jD0Yhccc6T9NzfRKDMNiO8KGC9DXQ9hyY"}
    // {"email": "Historian@gmail.com", "password": "Historian123", "eventId": "61638a5ab67461588c209597" }
   saveEvent: async (parent, { eventId,  }, context) => {
      if (context.user) {
         const updatedUser = await User.findOneAndUpdate(
              {_id: context.user._id },
              { $addToSet: {events: eventId }},
              { new: true} );

            return updatedUser;
         }
         throw new AuthenticationError("You are not logged");
        },
    
    
    addComment: async (parent, { eventId, commentText }, context) => {
      if (context.user) {
        return Event.findOneAndUpdate(
          { _id: eventId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    editComment: async (parent, { commentId, commentText }, context) => {
      if (context.user) {
        return Comment.findOneAndUpdate(
          { _id: commentId },
          {
            $set: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeComment: async (parent, {  commentId }, context) => {
      if (context.user) {
        return Comment.findOneAndUpdate(
          { _id: commentId },
          {
            $pull: {
              comments: {
                _id: commentId,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
