const initialState = {
	data: []
}


export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_DATA':
			return Object.assign({}, state, {data: action.payload})
		case 'LOAD_LOCAL':
			console.log(action.payload)
			return Object.assign({}, state, {data: action.payload})
		case 'THUMB_UP':
			const i = action.payload;
			const newData = state.data
			const newItem = {...newData[i], thumbUp: newData[i].thumbUp+1}
			newData.splice(i, 1)
			newData.splice(i, 0, newItem)
			const newArr = []
			newData.map((i)=>{
				newArr.push(i)
				return i
			})
			return Object.assign({}, state, {data:newArr})

		case 'THUMB_DOWN':
			const j = action.payload;
			const newData2 = state.data
			const newItem2 = {...newData2[j], thumbDown: newData2[j].thumbDown+1}
			newData2.splice(j, 1)
			newData2.splice(j, 0, newItem2)
			const newArr2 = []
			newData2.map((j)=>{
				newArr2.push(j)
				return i
			})
			return Object.assign({}, state, {data:newArr2})
		default:
			return state
	}
}