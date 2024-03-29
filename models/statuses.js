const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var statusSchema = new Schema({
  name            : { type: String, default: '', required: true },
  required_value  : { type: Number, default: 0, required: true },
  points          : { type: Number, default: 0, required: true }
})

var Status = mongoose.model('statuses', statusSchema);

module.exports = Status;
