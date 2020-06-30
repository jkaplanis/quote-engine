const Airports = require("../models/Airports.js");

module.exports = {
  getAllAirports: function (req, res) {
    Airports.find({})
      .then(data => {
        if (data) {
          res.json(data);
        } else {
          res
            .status(404)
            .send({ success: false, message: "Could not retrieve airports" });
        }
      })
      .catch(err => res.status(400).send(err));
  }
};
