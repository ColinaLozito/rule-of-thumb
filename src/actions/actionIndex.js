
export const getData = () => dispatch => {
	fetch('/data.json')
	.then(
		(response) => {
			if (response.status !== 200) {
				console.log('Looks like there was a problem. Status Code: ' + response.status);
				return;
			}
			response.json().then((data) => {
				dispatch({
					type: "GET_DATA",
					payload:data.list
				})
			});
		}
	)
	.catch((err) => {
		console.log('Fetch Error :-S', err);
	});
}

export const loadLocal = (localData) => dispatch => {
	dispatch({
		type: "LOAD_LOCAL",
		payload: localData
	})
}

export const thumbUp = (i) => dispatch => {
	dispatch({
		type: "THUMB_UP",
		payload: i
	})
}

export const thumbDown = (i) => dispatch => {
	dispatch({
		type: "THUMB_DOWN",
		payload: i
	})
}