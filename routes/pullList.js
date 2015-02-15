module.exports = function(app) {

    app.get('/pull/list', function(req, res) {

        var pulls = app.db.get('pulls')


        pulls.find({}, function(err, ps) {

            res.render('pullList.jade', {
                pulls: ps 
            })
        })
    })
}

