const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const airportSchema = new Schema({
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
    type: String
  },
  latMin: {
    type: String
  },
  latSec: {
    type: String
  },
  latDirection: {
    type: String
  },
  longDef: {
    type: String
  },
  longMin: {
    type: String
  },
  longSec: {
    type: String
  },
  longDirection: {
    type: String
  },
  altitude: {
    type: String
  },
  latDecimalDegrees: {
    type: String
  },
  longDecimalDegrees: {
    type: String
  }
});
