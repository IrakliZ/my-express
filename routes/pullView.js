var _ = require('lodash');
module.exports = function(app) {

    app.get('/pull/view/:id', function(req, res) {
        var pull = app.db.get('pulls');
        
        pull.find({}, function(err, ps) {
            var p = _.find(ps, function(ps) { return ps.id == req.params.id}) 
        
            res.render('pullView.jade', {
                pull: p
            })
        
            
                
        })
    })
}
