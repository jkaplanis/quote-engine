const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AirportSchema = new Schema({
  icaoCode: {
    type: String
  },
  iataCode: {
    type: String
  },
  airportName: {
    type: String
  },
  city: {
    type: String
  },
  country: {
    type: String
  },
  latDeg: {
    type: Number
  },
  latMin: {
    type: Number
  },
  latSec: {
    type: Number
  },
  latDirection: {
    type: String
  },
  longDef: {
    type: Number
  },
  longMin: {
    type: Number
  },
  longSec: {
    type: Number
  },
  longDirection: {
    type: String
  },
  altitude: {
    type: Number
  },
  latDecimalDegrees: {
    type: Number
  },
  longDecimalDegrees: {
    type: Number
  }
});

const Airport = mongoose.model("Airport", AirportSchema);

module.exports = Airport;
