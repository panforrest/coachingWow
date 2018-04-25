const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

router.post('/register', function(req, res){
	var params = req.body
    turbo.createUser(params)
	.then(data => {
		req.vertexSession.user = {id: data.id} // set session with user ID
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
})

router.get('/currentuser', function(req, res){
	if (req.vertexSession == null){
		res.json({
			confirmation: 'success',
			user: null	
		})
		return		
	}

	if (req.vertexSession.user == null){
		res.json({
			confirmation: 'success',
			user: null	
		})	
		return	
	}

	res.json({
		confirmation: 'success',
		user: req.vertexSession.user   //user: req.vertexSession.id 
	})
})

module.exports = router