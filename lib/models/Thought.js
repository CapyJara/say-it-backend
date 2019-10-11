const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema ({
  message: {
    type: String,
    required: true
  },
  time : { 
    type : Date, 
    default: Date.now 
  },
}, 
{
  versionKey: false
}
);

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
