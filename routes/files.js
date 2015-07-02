var yaml = require('js-yaml'),
    fs   = require('fs'),
    mongoosastic = require('mongoosastic'),
    File = require('../models/composeFiles.js');

var auth = function(req, res, next){
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/');
};

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
    app.post('/create', auth, function(req, res){
        var file = new File({
            title: req.body.params.form.title,
            compose: req.body.params.form.compose,
            readme: req.body.params.form.readme,
            user: req.user.username,
            profileLink: req.user.profileUrl,
            tags: req.body.params.form.tags
        });

        file.save(function(err, savedFile){
            if(err){
                console.log(err);
            }
            file.on('es-indexed', function(){
                console.log('file indexed');
            });
        });
        res.redirect('/registry/' + file._id);
    });

    app.get('/files', auth, function(req, res){
        File.find({}, function(err, files){
            if(err) console.log(err);
            res.json(files);
        });
    });

    app.get("/search", function(req, res){

        File.search({
            query_string:{
                query: req.query.term
            }
        }, function(err, data){
            if(err) console.log(err);
            res.json(data.hits.hits);
        });
    });

    app.get('/files/:id', auth, function(req, res){
        File.findOne({_id: req.query.id}, function(err, files){
            if(err) console.log(err);
            res.json(files);
        });
    });
};
