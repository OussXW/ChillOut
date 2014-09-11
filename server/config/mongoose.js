var mongoose = require('mongoose'),
  userModel = require('../models/User'),
  courseModel = require('../models/Course');
  spotifyModel = require('../models/Spotify');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('chill_out db opened');
  });

  userModel.createDefaultUsers();
  courseModel.createDefaultCourses();
  spotifyModel.createDefaultSpotifys();

};

