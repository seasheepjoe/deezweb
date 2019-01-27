import axios from 'axios';

let api = axios.create();
let baseUrl = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/";

export default {
	fetchAll(url) {
		return api.get(url)
			.then(response => {
				if (!response.data.error) {
					return Promise.resolve(response.data);
				}
			})
			.catch(err => {
				Promise.reject(err);
			})
	},
	fetchById(id) {
		return api.get(`${baseUrl}${id}`)
			.then(response => {
				if (!response.data.error) {
					return Promise.resolve(response.data);
				} else {
					console.warn('Could not get track with id ' + id);
				}
			})
			.catch(err => {
				Promise.reject(err);
			})
	}
}