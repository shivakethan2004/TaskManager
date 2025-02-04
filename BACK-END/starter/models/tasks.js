const mongoose = require("mongoose");
const TaskSchmema = new mongoose.Schema({
  name: {
    type: String,
    required : [true, 'must provide the name'],
    trim : true,
    maxlength: [20, 'name cannot be more than 20 characters'], 
  },
  completed: {
    type: Boolean,
    default:false,
  }
});
module.exports = mongoose.model("Task", TaskSchmema);
