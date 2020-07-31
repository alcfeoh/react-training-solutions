const BASE_URL = 'http://localhost:8000';

export function addToCart(plate) {
	fetch(BASE_URL + '/cart/' + plate._id, {method: 'PUT'})
	.then(response => response.json())
	.then(data => {});
	return true;
}

export async function getCartContents(plate) {
	let output = {};
	await fetch(BASE_URL + '/cart', {method: 'GET'})
	.then(response => response.json())
	.then(data => { output = data; console.log("HELLO"); console.log(output);});
	console.log("returning output ");
	return output;
};

export function removeFromCart(plate) {
	fetch(BASE_URL + 'cart/' + plate._id, {method: 'DELETE'});
}