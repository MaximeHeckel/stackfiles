var yaml = require('js-yaml'),
    fs   = require('fs'),
    mongoosastic = require('mongoosastic'),
    File = require('../models/composeFiles.js');

var auth = function(req, res, next){
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/');
};

function tokenizer(name){
    var newArray = [];
    var array = name.split('');
    newArray[0] = array[0];
    for(var i = 1; i < array.length; i++){
        newArray[i] = newArray[i-1]+array[i];
    }
    return newArray;
}

var stream = File.find().stream();
var total = 0;
var count = 0;
var done = false;

File.createMapping(function(err, mapping){
  if(err){
    console.log('error creating mapping (you can safely ignore this)');
    console.log(err);
  } else {
    console.log('mapping created!');
    console.log(mapping);
  }
});

function reIndex(stream, count, total, done){
  stream.on('data', function(doc){
    total++;
    count++;
    doc.index(function() {
      count--;
      allDone();
    });
  });

  stream.on('close', function() {
    done = true;
    allDone();
  });

  stream.on('error', function(err){
    throw err;
  });
}

function allDone() {
  if (count > 0) return;
  if (!done) return;
  console.log('indexed ' + total + ' docs');
  process.exit(0);
}

module.exports = function(app) {
    app.post('/api/v1/create', auth, function(req, res){
        var serviceTags = [];
        var images = [];

        for(var key in req.body.params.form.stackfile){
            serviceTags.push(key);
            images.push(req.body.params.form.stackfile[key].image);
        }

        var file = new File({
            title: req.body.params.form.title,
            stackfile: req.body.params.form.stackfile,
            branch: req.body.params.form.branch,
            path : req.body.params.form.path,
            user: req.body.params.form.orgname,
            author: req.user.username,
            token: tokenizer(req.body.params.form.title),
            profileLink: "https://github.com/"+req.body.params.form.orgname,
            projectName: req.body.params.form.name,
            tags: serviceTags,
            images: images
        });

        file.save(function(err, savedFile){
            if(err){
                res.send(err);
            }
            file.on('es-indexed', function(){
                console.log('file indexed');
            });
        });
        res.redirect('/registry/' + file._id);
    });

    app.get('/api/v1/files', function(req, res, next){
        File.find({}, function(err, files){
            if(err){
                return nex(err);
            }
            res.json(files);
        });
    });

    app.get('/api/v1/files/:id', function(req, res, next){
        File.findOne({_id: req.query.id}, function(err, file){
            if(err){
                return next(err);
            }
            res.json(file);
        });
    });

    app.get('/api/v1/files/fav/:id', function(req, res, next){
        File.findOneAndUpdate({ _id: req.params.id }, { $inc: { stars: 1 }}, function(err,file){
            if(err){
                return next(err);
            }
            res.send("Success");
        });
    });

    app.delete('/api/v1/files/:id', auth, function(req, res, next){
        File.findOne({_id: req.query.id, author: req.user.username},function(err, file){
            if(err){
                return next(err);
            } else {
                file.remove(function(err, data, next){
                    if(err){
                        return next(err);
                    } else {
                        reIndex(stream, count, total, done);
                        res.json(data);
                    }
                });
            }
        });
    });


    app.get("/api/v1/deploy/:id", function(req, res, next){
        File.findOne({_id: req.params.id}, function(err, file){
            if(err){
                return next(err);
            } else {
                res.redirect('https://dashboard.tutum.co/stack/deploy/?repo='+file.profileLink+'/'+file.projectName);
            }
        });
    });

    app.get("/api/v1/search", function(req, res, next){
        File.search({
            query_string:{
                query: req.query.term
            }
        }, function(err, data){
            if(err){
                return next(err);
            }
            res.json(data.hits.hits);
        });
    });
};
