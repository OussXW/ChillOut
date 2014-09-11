var mongoose=require('mongoose');
var spotifySchema=mongoose.Schema({
    title: {type:String, required:'{PATH} is required!'},
    rating: {type:String, required:'{PATH} is required!'},
    tags:[String]

})
var Spotify = mongoose.model('Spotify',spotifySchema);

function createDefaultSpotifys(){
    Spotify.find({}).exec(function(err,collection){
        if(collection.length === 0) {
            Spotify.create({title: '<iframe src="https://embed.spotify.com/?uri=spotify:track:4bz7uB4edifWKJXSDxwHcs" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>', rating:'5', tags: ['']});

        }
    })
}
exports.createDefaultSpotifys=createDefaultSpotifys;