module.exports = function(app) {

    app.get('/repo/list', function(req, res) {

        var repos = app.db.get('repos')

        repos.find({}, function(err, reps) {
            console.log(reps)
            res.render('repoList.jade', {
                repos: reps
            })
        })
    })
}

