const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

router.post('/register', function(req, res){
	var params = req.body
    turbo.createUser(params)
	.then(data => {
	    res.json({
	    	confirmation: 'success',
	    	data: data
	    })
	})
	.catch(err => {
	    res.json({
            confirmation: 'success',
            message: err.message
	    })
	})    

	// res.json({
	// 	confirmation: 'success',
	// 	data: req.body  //data: query.body
	// })
})

module.exports = router