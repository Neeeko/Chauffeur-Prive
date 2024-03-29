const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var userSchema = new Schema({
  name            : { type: String, default: '', required: true },
  email           : { type: String, unique: true, default: '', required: true },
  rides           : [{ type: ObjectId, ref: 'rides' }],
  loyalty_points  : { type: Number, default: 0 }
})

var User = mongoose.model('users', userSchema);

module.exports = User;
