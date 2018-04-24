import constants from '../constants'

var initialState = {
	all: [
            {id:1, key:'1', price:'10', defaultAnimation:2, label:'Ping Pong', position:{lat:40.7224017, lng:-73.9896719}},
            {id:2, key:'2', price:'10', defaultAnimation:2, label:'Ballroom Dance', position:{lat:40.7224017, lng:-73.9996719}},
            {id:4, key:'4', price:'20', defaultAnimation:2, label:'Rock Climbing', position:{lat:40.7124017, lng:-73.9796719}}
        ]

}

export default (state = initialState, action) => {
	let updatedState = Object.assign({}, state)

	switch (action.type) {
        case constants.ITEM_ADDED:
          console.log('ITEM_ADDED: '+JSON.stringify(action.data))
          // let all = Object.assign([], newState.all)
          let all = (updatedState.all) ? Object.assign([], updatedState.all) : []
          all.push(action.data)
          updatedState['all'] = all
          return updatedState

		// case constants.USER_CREATED:
		// 	let array = (newState.all) ? Object.assign([], newState.all) : []
		// 	array.unshift(action.data)
		// 	newState['all'] = array
		// 	return newState

		// case constants.CURRENT_USER_RECEIVED:
		// 	newState['currentUser'] = action.data
		// 	return newState

		// case constants.USERS_RECEIVED:
		// 	newState['all'] = action.data
		// 	return newState



		default:
			return state
	}
}