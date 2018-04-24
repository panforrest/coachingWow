import constants from '../constants'

var initialState = {
	all: [
	        {id:'1', price:10, label:'Ping Pong', position:{lat:40.7224017, lng:-73.9896719}, seller:{username:'lebron_james',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}},
	        {id:'2', price:20, label:'Dance', position:{lat:40.7124017, lng:-73.9996719}, seller:{username:'eli_manning',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}},
	        {id:'3', price:30, label:'Rock Climbing', position:{lat:40.7024017, lng:-73.999671996719}, seller:{username:'tom_brady',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}}
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