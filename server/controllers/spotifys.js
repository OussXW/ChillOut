var Spotify=require('mongoose').model('Spotify');
exports.getSpotifys=function(req,res){
    Spotify.find({}).exec(function(err,collection){
        res.send(collection);
    })
};