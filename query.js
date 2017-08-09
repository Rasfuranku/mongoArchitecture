var DB = require('./mongo');

function Query() {
    this.db = null;
}

Query.prototype.find = function(){
    var db = new DB;

    return new Promise((success, reject) => {
        db.connect(database)
        .then(function(){
            database.find("soccer_team")
            .then(function(doc){
                console.log("doc");
                console.log(doc);
                success(doc);
            })
            .catch(function(err){
                console.log(err);
                reject(err);
            })
        }).catch(function(err){
            console.log(err);
            reject(err);
        });
    });
}

module.exports = Query;