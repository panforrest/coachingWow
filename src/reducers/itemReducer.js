import constants from '../constants'

var initialState = {
	all: [
            {id:1, key:'1', price:'10', defaultAnimation:2, label:'Ping Pong', position:{lat:40.7224017, lng:-73.9896719}},
            {id:2, key:'2', price:'10', defaultAnimation:2, label:'Ballroom Dance', position:{lat:40.7224017, lng:-73.9996719}},
            {id:4, key:'4', price:'20', defaultAnimation:2, label:'Rock Climbing', position:{lat:40.7124017, lng:-73.9796719}}
        ]

}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)

	switch (action.type) {



		// case constants.CURRENT_USER_RECEIVED:
		// 	newState['currentUser'] = action.data
		// 	return newState

		// case constants.USERS_RECEIVED:
		// 	newState['all'] = action.data
		// 	return newState

		// case constants.USER_CREATED:
		// 	let array = (newState.all) ? Object.assign([], newState.all) : []
		// 	array.unshift(action.data)
		// 	newState['all'] = array
		// 	return newState

		default:
			return state
	}
}