const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var rideSchema = new Schema({
  pickup_location   : { type: [Number], index: '2d', required: true },
  arrival_location  : { type: [Number], index: '2d', required: true },
  price             : { type: Number, default: 0, required: true },
  user              : { type: ObjectId, ref: 'users', required: true }
})

var Rides = mongoose.model('rides', rideSchema);

module.exports = Rides;
