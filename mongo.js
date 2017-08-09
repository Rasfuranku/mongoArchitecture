var MongoClient = require("mongodb").MongoClient;
var ErrorService = require('./service/error.js');

const uri = 'mongodb://127.0.0.1:27017/soccer_team';
var opts = { autoReconnect: true };

function DB() {
    this.db = null;
}

/**
 * Open connection with the database.
 */
DB.prototype.connect = function(){
    var self = this;

    return new Promise((success, reject) => {
        if(self.db){
            console.log("out connect to: " + uri);
            success();
        }else{
            MongoClient.connect(uri, opts)
            .then(function(database){
                console.log("in connect to: " + uri);
                self.db = database;
                success(database);
            })
            .catch(function(err){
                console.log("error: " + err);
                reject(ErrorService.buildErrorResponse(err, 500));
            });
        }
    });
}

DB.prototype.find = function(coll, query, projection){
    this.query = query || {};
    this.projection = projection || {};
    var self = this;

    return new Promise((success, reject) => {
        self.db.collection(coll).find(this.query, this.projection)
        .then(function(doc){
            success(doc);
        })
        .catch(function(err){
            reject(err);
        });

        // self.db.collection(coll, function(err, doc){
        //     if(err){
        //         reject(err);
        //     }else{
        //         success(doc);
        //     }
        // });
    });
}

module.exports = DB;