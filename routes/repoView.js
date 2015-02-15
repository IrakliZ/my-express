var _ = require('lodash');
module.exports = function(app) {

    app.get('/repo/view/:id', function(req, res) {
        var repo = app.db.get('repos');
        
        repo.find({}, function(err, reps) {
            var rep = _.find(reps, function(reps) { return reps.id == req.params.id}) 
        
            res.render('viewRepo.jade', {
                repo: rep
            })
        })
    })
}
