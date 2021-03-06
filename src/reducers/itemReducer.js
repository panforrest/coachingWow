import constants from '../constants'

var initialState = {
	// all: [
	//         {id:'1', price:10, name:'Ping Pong', image: 'https://hoodrhetoric.com/wp-content/uploads/2016/08/Air-Jordan-1-Retro-High-OG-Banned-Black-White-555088-001.jpg', position:{lat:40.7224017, lng:-73.9896719}, seller:{username:'lebron_james',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}},
	//         {id:'2', price:20, name:'Dance', image: 'https://smhttp-ssl-18667.nexcesscdn.net/media/catalog/product/cache/1/image/400x400/9df78eab33525d08d6e5fb8d27136e95/s/i/sig-7970018-sofa-chise-3.jpg', position:{lat:40.7124017, lng:-73.9996719}, seller:{username:'eli_manning',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}},
	//         {id:'3', price:30, name:'Rock Climbing', image: 'https://d2uk7vc0yceq94.cloudfront.net/uploads/2017/08/25/s/0/1/12707801/PV2H-5.jpeg', position:{lat:40.7024017, lng:-73.999671996719}, seller:{username:'tom_brady',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}}
 //        ]
    all: null
}

export default (state = initialState, action) => {
	let updated = Object.assign({}, state)

	switch (action.type) {
        case constants.ITEM_ADDED:
          const payload = action.data
          console.log('ITEM_ADDED: '+JSON.stringify(payload.data))
          // let all = Object.assign([], newState.all)
          // let all = (updated.all) ? Object.assign([], updated.all) : []
          let all = Object.assign([], updated.all)
          all.push(payload.data)
          updated['all'] = all
          return updated

        case constants.ITEMS_RECEIVED:
          updated['all'] = action.data.data
          return updated

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
			return updated
	}
}