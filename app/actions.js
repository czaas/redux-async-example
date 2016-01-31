import axios from 'axios';

const url = 'http://dev100.etnainteractive.com/api/v1/content';

export const GET_DATA = 'GET_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const ADD_ITEM = 'ADD_ITEM';
export const SEND_ITEM = 'SEND_ITEM';

// this is what I call to let my store know that I'm making a async call
export function getData (itemType) {
	return {
		type: GET_DATA,
		itemType
	};
}
// I call this after the data is received
export function receiveData (data) {
	return {
		type: RECEIVE_DATA,
		newData: data
	};
}

export function sendItem (item) {
	return {
		type: SEND_ITEM,
		item
	}
}

export function addItem (item) {
	return {
		type: ADD_ITEM,
		newItem: item
	};
}




// The actual async call by the component
export function apiGetData (itemType) {

	return (dispatch) => {
		dispatch(getData(itemType));

 		// eventually want to make itemType accept key value pairs
		axios.get(url + '?status=' + itemType)
		.then(response => dispatch(receiveData(response.data)))
		.catch((err) => console.error(err));

	}
}

// Adding new item to DB async
export function apiAddItem (item) {
	return (dispatch) => {
		
		dispatch(sendItem(item)); // updates the state to show isPosting data

		axios.post(url, item)
		.then((response) => dispatch(addItem(response.data.context_item))) // adds item to state and removes
		.catch((err) => console.error(err));										 // isPosting state

	};
}