var yaml = require('js-yaml');
var fs   = require('fs');

var File = require('../models/composeFiles.js');

// Get document, or throw exception on error
/*try {
  var doc = yaml.safeLoad(fs.readFileSync('./routes/test.yml', 'utf8'));
  console.log(yaml.dump(doc))
} catch (e) {
  console.log(e);
}*/
var auth = function(req, res, next){
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/');
};


module.exports = function(app) {
    app.post('/create', auth, function(req, res){
        console.log("*****");
        console.log(req.body.params.form.compose);
        res.redirect('/registry');
    })
};
