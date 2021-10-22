const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const eventSchema = new Schema({
  eventText: {
    type: String,
    trim: true,
  },
  eventTitle: {
    type: String,
    required: true,
    trim: true,
  },

  comments: [
    {
      commentText: {
        type: String,
        required: true,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Event = model('Event', eventSchema);

module.exports = Event;
